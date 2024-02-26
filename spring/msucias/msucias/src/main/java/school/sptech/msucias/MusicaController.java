package school.sptech.msucias;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/musicas")
public class MusicaController {
    private List<Musica> musicas = new ArrayList<>();

    @GetMapping
    public ResponseEntity<List<Musica>> listar(){
        if(musicas.isEmpty()){
            return ResponseEntity.status(204).build();
        }

        return ResponseEntity.status(200).body(musicas);

    }

    @GetMapping("/{indice}")
    public ResponseEntity<Musica> recuperar(@PathVariable int indice){
        if(existeMusica(indice)){
            return ResponseEntity.status(200).body(musicas.get(indice));
        }
        return ResponseEntity.status(404).build();
    }

    @PostMapping
    public ResponseEntity<Musica> cadastrar(@RequestBody Musica musica){
        musicas.add(musica);
        return ResponseEntity.status(201).body(musica);
    }

    @PutMapping("{i}")
    public ResponseEntity<Musica> atualizar(@RequestBody Musica m, @PathVariable int i){
        if(existeMusica(i)){
            musicas.set(i,m);
            return ResponseEntity.status(200).body(m);
        }
        return ResponseEntity.status(404).build();
    }

    @DeleteMapping("{i}")
    public ResponseEntity<Void> deletar(@PathVariable int i){
        if(existeMusica(i)){
            musicas.remove(i);
            return ResponseEntity.status(204).build();
        }
        return ResponseEntity.status(404).build();
    }

    public boolean existeMusica(int i){
        return i >= 0 && i < musicas.size();
    }
}

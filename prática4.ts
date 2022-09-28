class funcionario1 {
    name: string
    dias: number
    faltas: boolean
    
    sinopse(){
        console.log(`a${funcionario.name}a${funcionario.dias}a${funcionario.faltas}`);


        
    }
}

const funcionario = new funcionario1();
funcionario.name = "Alemão Gameplay";
funcionario.dias= 365;
funcionario.faltas = false;

funcionario.sinopse();



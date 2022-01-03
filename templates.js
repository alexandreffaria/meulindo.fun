const titulo = `
    <div class="titulo">
        <h1 id="casa"><a href="index.html">Casa do Meu Lindo &#129343;</a></h1>
    </div>
`;

const menuSuperior = `
    <div class="menu">
        <div class="menu-item">
            <h2> 
                <a href="code-of-nature.html">Code of Nature</a>
            </h2>
        </div>
        <div class="menu-item">
            <h2> 
                <a href="recomendacao-youtube.html">Youtubers</a>
            </h2>
        </div>
        <div class="menu-item">
            <h2> 
                <a href="csgo-clips.html">CSGO Clips</a>
            </h2>
        </div>
        <div class="menu-item">
            <h2> 
                <a href="arduino-stuff.html">Arduino Stuff</a>
            </h2>
        </div>
        <div class="menu-item">
            <h2> 
                <a href="blender.html">Blender</a>
            </h2>
        </div>
    </div>
`;

let cabecalho = document.getElementById('cabecalho');
cabecalho.innerHTML += titulo;
cabecalho.innerHTML += menuSuperior;


let link = "http://localhost:3000/posts";
fetch(link)
  .then((res) => res.json())
  .then((data) => {
    let card = document.querySelector('.hero-body')
    data.map((res) => 
        {
            return card.innerHTML += `
            <div class="card" >
            <img src=${res.image}/>
                <div>
                    </img src=${res.logo}>
                    <h1>
                        ${res.title}
                    </h1>
                    <p>${res.koment}</p>
                </div>
            </div>
        `;
        }
    )    
})
function GetAllProducts() {
    fetch('http://jservice.io/api/clues?value=100&min_date=1985-02-20')
    .then(response => response.json())
    .then(data => {
        let item = '';

        data.forEach(x => {
            item += `
            <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">${x.category.title}</h5>
                      <p class="card-text">${x.question}</p>
                      <h6 class="card-subtitle mb-2 text-muted">${x.answer}</h6>
                     
                    </div>
                  </div>

            `
        })
        document.getElementById('list').innerHTML = item;
    })
    
}

GetAllProducts();
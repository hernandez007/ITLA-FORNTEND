document.addEventListener('DOMContentLoaded', () => {
    const servicesContainer = document.getElementById('servicesContainer');

 
    fetch('../Data/data.json')
      .then(response => response.json())
      .then(data => {
          const services = data.arrayServices;
          displayServices(services);
      })
      .catch(error => {
        alert("Error al cargar los servicios")
          console.error("Error al cargar los servicios:", error);
      });

    function displayServices(services) {
        services.forEach(service => {
            const serviceCard = document.createElement('div');
            serviceCard.classList.add('single-service');
            
            serviceCard.innerHTML = `
                <div class="overlay" class="openModalBtn"></div>
                <img src="${service.urlImg} " class="openModalBtn" alt="servicio ">
                <div class="service-desc"  >
                  <h3>${service.titleService}</h3>
                  <hr>
                  <p>${service.descriptionService}</p>
                  <button type="button" class="btn-service btn-detail openModalBtn" data-id="${service.idService}">Ver mas</button>
                </div>
                
            `;
            
            serviceCard.querySelector('button').addEventListener('click', () => {
              
                window.location.href = `services.html?id=${service.idService}`;
            });
            servicesContainer.appendChild(serviceCard);

        });
    }
});

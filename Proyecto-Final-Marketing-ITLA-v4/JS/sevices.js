document.addEventListener('DOMContentLoaded', () => {
    const plansContainer = document.getElementById('plansContainer');
    const titleServiceP = document.getElementById('titleServiceP'),
        descriptionService = document.getElementById('descriptionService'),
        important = document.getElementById('important'),
        objectives= document.getElementById('objectives');
    // Obtener el ID del servicio desde la URL
    const urlParams = new URLSearchParams(window.location.search);
    const serviceId = urlParams.get('id');

    // Función para obtener los datos del archivo JSON
    fetch('../Data/data.json')
      .then(response => response.json())
      .then(data => {
          const services = data.arrayServices;
          const service = services.find(s => s.idService == serviceId);
          
          if (service) {
              titleServiceP.innerText = service.titleService;
              descriptionService.innerText = service.descriptionService;
              important.innerText = service.important;
              objectives.innerText = service.objectives;
              displayPlans(service.plans);
          } else {
              plansContainer.innerHTML = '<p>Servicio no encontrado</p>';
          }
      })
      .catch(error => {
          console.error("Error al cargar los planes:", error);
      });

    // Función para mostrar los planes de un servicio específico
    function displayPlans(plans) {
   
        plans.forEach(plan => {
            const planCard = document.createElement('div');
            planCard.classList.add('card-team');
            
            planCard.innerHTML = `
                 <div class="card-img">
                        <img src="${plan.urlPlanImg}" alt="">
                    </div>
                    <div class="card-info">
                        <h3>${plan.typePlan}</h3>
                        <h4>DOP ${plan.price}.00</h4>

                        <div class="card-info-detail">
                          <h5>Incluye:</h5>
                          <ul>
                            ${plan.contains.map(contain => `
                                <li>${contain.containDescription}</li>
                            `).join('')}
                        </ul>
                        </div>
                        <button type="button" class="openModalBtn">Pagar</button>
                    </div>
              
            `;

            plansContainer.appendChild(planCard);
        });
    }
});

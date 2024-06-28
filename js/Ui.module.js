export class Ui {
  constructor() {}
  displayGame(data) {
    let gameBox = ``;
    for (let i = 0; i < data.length; i++) {
      // gameBox += `
      //     <div class="col-xxl-3 col-xl-3 col-lg-4 col-md-6">
      //         <div data-id="${
      //           data[i].id
      //         }" class="inner mt-5 p-3 border-black border-3">
      //           <div class="card ag-main-color p-3 h-100" >

      //             <img
      //               src="${data[i].thumbnail}"
      //               class="card-img-top"
      //               alt="..."
      //             />
      //             <div class="card-body pb-0">
      //               <div class="hstack justify-content-between">
      //                 <h3 class="h6 small text-white">${data[i].title}</h3>
      //                 <span class="badge text-bg-primary p-2">Free</span>
      //               </div>
      //               <p class="card-text text-white">
      //               ${data[i].short_description.split(" ", 5)}
      //               </p>
      //               <footer
      //                 class="card-footer small hstack justify-content-center py-0"
      //               >
      //                 <span class="badge badge-color text-bg-primary mt-3 mb-0"
      //                   >${data[i].genre}
      //                   </span
      //                 >
      //                 <span class="badge badge-color text-bg-primary mt-3 mb-0"
      //                   >${data[i].platform}</span
      //                 >
      //               </footer>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //  `;
      gameBox += `
         <div class="col">
         <div data-id="${
           data[i].id
         }"  class="card h-100 bg-transparent mt-5" role="button" ">
            <div  class="card-body">
               <figure class="position-relative">
                  <img class="card-img-top object-fit-cover h-100" src="${
                    data[i].thumbnail
                  }" />
               
               </figure>
   
               <figcaption>
   
                  <div class="hstack justify-content-between">
                     <h3 class="h6 small text-white">${data[i].title}</h3>
                     <span class="badge text-bg-primary p-2">Free</span>
                  </div>
   
                  <p class="card-text small  opacity-50 text-white" >
                     ${data[i].short_description.split(" ", 8)}
                  </p>
   
               </figcaption>
            </div>
   
            <footer class="card-footer small hstack justify-content-between">
   
               <span class="badge badge-color">${data[i].genre}</span>
               <span class="badge badge-color">${data[i].platform}</span>
   
            </footer>
         </div>
      </div>
         `;
    }

    document.getElementById("displayData").innerHTML = gameBox;
  }


  displayDetails(data) {
    const content = `
      <div class="col-md-4">
      <img src="${data.thumbnail}" class="w-100" alt="image details" />
   </div>
   <div class="col-md-8">
      <h3 class="text-white">Title: ${data.title}</h3>
      <p class="text-white">Category: <span class="badge text-bg-info"> ${data.genre}</span> </p>
      <p class="text-white"> Platform: <span class="badge text-bg-info"> ${data.platform}</span> </p>
      <p class="text-white">Status: <span class="badge text-bg-info"> ${data.status}</span> </p>
      <p class="small text-white">${data.description}</p>
      <a class="btn btn-outline-warning" target="_blank" href="${data.game_url}">Show Game</a>
   </div>
      
      `;

    document.getElementById("detailsContent").innerHTML = content;
  }


}

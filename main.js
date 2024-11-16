




fetchData()


async function fetchData() {
    try{
     const reponse= await fetch("https://api.github.com/users/MohamedMoustir")
     if (!reponse.ok) {
        console.log(error("this error"));   
     }
     const repos= await reponse.json();
     console.log(repos);
     displyData(repos)

    }
    catch(error){
console.log(error);

    }
    

}

function displyData(repo){
    const card_continer =document.getElementById("continer_card")
    card_continer.innerHTML = `<div class="flex  justify-center items-center ">
        <div class="max-w-[490px] rounded-lg w-[100%] overflow-hidden bg-white shadow-[0_0_1rem_rgba(0,0,0,0.2)] ">
            <div class="card">
                <div class="grid grid-cols-5">
                    <div class="h-[100px] bg-gray-200 rounded-full border overflow-hidden">
                        <img src="${repo.avatar_url
                        }" alt="demo" />
                    </div>
                    <div class="col-span-3 p-3">
                        <div class="font-bold text-[25px]">${repo.name}</div>
                        <div class="text-blue-500"><a href="@" >@${repo.email ? '' : 'Not avilable'}</a></div>
                        <div class="mb-3">${repo.bio}</div>
                        <div
                            class="card flex justify-around items-center w-[130%] text-gray-500 bg-gray-200 focus:bg-white rounded-lg p-2">
                            <div class="text-center">
                                <p class="text-sm">rpo</p>
                                <p class="font-bold text-gray-800">${repo.public_repos
                                }</p>
                            </div>
                            <div class="text-center">
                                <p class="text-sm">Followers</p>
                                <p class="font-bold text-gray-800">${repo.followers}</p>
                            </div>
                            <div class="text-center">
                                <p class="text-sm ">following</p>
                                <p class="font-bold text-gray-800 flex gap-1 text-center ml-[20px]">
                                ${repo.following
                                }
                                </p>
                            </div>
                        </div>
                        <div class="flex mt-3 gap-2 grid grid-cols-2 justify-around w-[130%]">
                          <div>Not avilable</div>
                          <div>Not avilable</div>
                          <div>Not avilable</div>
                          <div>Not avilable</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`
}
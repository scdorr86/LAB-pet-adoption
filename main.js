const pets = [
    {
      id: 1,
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      type: "cat",
      imageUrl: "https://images.unsplash.com/photo-1562009910-830d74050500?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2F0fHx8fHx8MTY3NDA2NjA0NA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600"
      //imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
    },
    {
        id: 2,
      name: "Trouble",
      color: "Brown",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "dino",
      //imageUrl: "http://www.jozilife.co.za/wp-content/uploads/The-Dino-Expo.jpg",
      imageUrl: "https://media.australian.museum/media/dd/images/Some_image.2e16d0ba.fill-600x400.fd58794.jpg"
    },
    {
      id: 3,
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      type: "dino",
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
    },
    {
      id: 4,
      name: "Coco",
      color: "Black",
      specialSkill: "Burps minimally.",
      type: "dog",
      //imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
      imageUrl: "https://s36700.pcdn.co/wp-content/uploads/2018/03/Bulldog-asleep-with-tongue-out-600x400.jpg.optimal.jpg"
    },
    {
      id: 5,
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "cat",
      imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
    },
    {
      id: 6,
      name: "Tiger",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      type: "dog",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
    },
    {
      id: 7,
      name: "Oreo",
      color: "Yellow",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
    },
    {
      id: 8,
      name: "Ginger",
      color: "Grey",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "dino",
      imageUrl: "https://t3.ftcdn.net/jpg/00/32/27/00/360_F_32270054_XNBDO0Y6949vvrdsKiFmY2XnQMDjWI2u.jpg"
      //imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
    },
    {
      id: 9,
      name: "Sassy",
      color: "Brown",
      specialSkill: "Adept at talking self and others out of fights.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
    },
    {
      id: 10,
      name: "Sammy",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
    },
    {
      id: 11,
      name: "Coco",
      color: "Orange",
      specialSkill: "Can be around food without staring creepily at it.",
      type: "dino",
      imageUrl: "https://images.unsplash.com/photo-1589519659882-3eb28ebc769f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjB8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"
      //imageUrl: "http://www.cantref.com/userfiles/events/walking%20dino.jpg?w=600"
    },
    {
      id: 12,
      name: "Buster",
      color: "Green",
      specialSkill: "Does not use excessive acronyms.",
      type: "dog",
      imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
    },
    {
      id: 13,
      name: "Chester",
      color: "Red",
      specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
      type: "dog",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT13EghPXVYr2mERT8PFLLxFS11ShbPUNJdg&usqp=CAU"
    },
    {
      id: 14,
      name: "Samantha",
      color: "Brown",
      specialSkill: "Always up for dessert.",
      type: "cat",
      imageUrl: "https://media.nature.com/lw767/magazine-assets/d41586-020-02779-3/d41586-020-02779-3_18481780.jpg"
    },
    {
      id: 15,
      name: "Coco",
      color: "Red",
      specialSkill: "Burps minimally.",
      type: "cat",
      imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg"
    },
    {
      id: 16,
      name: "Smokey",
      color: "Brown",
      specialSkill: "Drives at a safe rate of speed in snow or rain.",
      type: "dino",
      imageUrl: "https://media.audubon.org/styles/article_hero_inline/s3/web_bk7djd.jpg?itok=bPZdbm8H"
    },
    {
     id: 17,
      name: "Muffin",
      color: "Yellow",
      specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
      type: "cat",
      imageUrl: "https://i.hurimg.com/i/hdn/75/600x400/5da6e153d3806c18308e2120.jpg"
    },
    {
      id: 18,
      name: "Salem",
      color: "Brown",
      specialSkill: "Proficient in air guitar",
      type: "dino",
      imageUrl: "https://img.atlasobscura.com/A_f5EcN4NEDGMjF4tPYLRniAHfhwLGJJLIzs9aJfyoE/rs:fill:600:400:1/g:ce/c:1157:771:nowe:7:92/q:81/sm:1/scp:1/ar:1/aHR0cHM6Ly9hdGxh/cy1kZXYuczMuYW1h/em9uYXdzLmNvbS91/cGxvYWRzL3BsYWNl/X2ltYWdlcy84YzVm/M2Y1OC00Y2UzLTQ2/ZDMtYTE1My1kYzQz/ZGNiNDI0NjFlYTgz/MWUxMzQwNjM0OTMz/NzFfUFhMXzIwMjIw/NjI3XzIxNDI0Mzk3/Ni5qcGc.jpg"
    },
    {
      id: 19,
      name: "Callie",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "dog",
      imageUrl: "https://images.squarespace-cdn.com/content/v1/5b631cba5b409b413bb3a633/1610029767424-4PBYUAI416Q65YYWQG9K/yorkie-with-shopping-cart.png?format=1500w"
    },
    {
      id: 20,
      name: "Spooky",
      color: "Black",
      specialSkill: "Uses litter box at appropriate hours.",
      type: "cat",
      imageUrl: "https://static01.nyt.com/images/2020/04/22/science/22VIRUS-PETCATS1/merlin_150476541_233fface-f503-41af-9eae-d90a95eb6051-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
    },
    {
      id: 21,
      name: "Miss kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove.",
      type: "dino",
      imageUrl: "http://drexel.edu/news/~/media/Drexel/Sites/News/Images/story_images/Matt/DinosaursSitecore.ashx"
    },
    {
        id: 22,
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      type: "cat",
      imageUrl: "https://static.wixstatic.com/media/cfd9f0_c166b2fcb3374513b236629c957b02f5~mv2.jpg/v1/fill/w_600,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/cfd9f0_c166b2fcb3374513b236629c957b02f5~mv2.jpg"
    },
    {
        id: 23,
      name: "Buddy",
      color: "Red",
      specialSkill: "Enjoys fine wine.",
      type: "dog",
      imageUrl: "https://cdn.sanity.io/images/4ij0poqn/production/296b7a32657888ba58ba52a23ad43b3fbe026a72-600x400.jpg"
    },
    {
        id: 24,
      name: "George",
      color: "Brown",
      specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
      type: "dog",
      //imageUrl: "http://www.dogbreedplus.com/dog_breeds/images/basset-hound-4.jpg"
      imageUrl: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/07200501/Basset-Hound-standing-in-the-garden.jpg"
    },
    {
      id: 25,
      name: "Salem",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs.",
      type: "cat",
      imageUrl: "http://cdn.shopify.com/s/files/1/0163/6622/articles/Depositphotos_59478951_m-2015_600x.jpg?v=1540607816"
    },
    {
        id: 26,
      name: "Bubba",
      color: "Yellow",
      specialSkill: "Cleans himself.",
      type: "dog",
      imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
    },
    {
        id: 27,
      name: "Chloe",
      color: "Green",
      specialSkill: "Admits he is wrong",
      type: "dino",
      imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
    },
    {
        id: 28,
      name: "Nala",
      color: "Purple",
      specialSkill: "Dances when he has to.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
    },
    {
        id: 29,
      name: "Oscar",
      color: "Green",
      specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
      type: "cat",
      imageUrl: "https://cdn.shopify.com/s/files/1/0284/2391/3547/files/pexels-photo-4587970_600x600.jpg?v=1605043659"
    },
    {
        id: 30,
      name: "Lucy",
      color: "Red",
      specialSkill: "Doesn’t get weirded out by the word “moist.”",
      type: "dino",
      imageUrl: "https://live.staticflickr.com/65535/50517393192_793f63a9f4_b.jpg"
    }
  ];

  function render(items) {
    
  const targetingApp = document.querySelector("#container");
  let domString = "";

  for (const pet of items) {
    domString +=
    `<div class="card" style="width: 18rem;">
    <img src=${pet.imageUrl} class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${pet.name}</h5>
      <h6>${pet.color}</h6>
      <p class="card-text">${pet.specialSkill}</p>
      <h5>${pet.type}</h5>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`
  }

targetingApp.innerHTML = domString;
}


const dogBtn = document.querySelector("#dogs")
const catBtn = document.querySelector("#cats")
const dinoBtn = document.querySelector("#dinos")
const clrBtn = document.querySelector("#reset")

catBtn.addEventListener("click", catsFunc)
dogBtn.addEventListener("click", dogsFunc)
dinoBtn.addEventListener("click", dinoFunc)
clrBtn.addEventListener("click", clearFunc)

function dogsFunc() {
  const filtered = pets.filter(arrItem => arrItem.type === "dog")
  render(filtered)
}
function catsFunc() {
  const filtered = pets.filter(arrItem => arrItem.type === "cat")
  render(filtered)
}
function dinoFunc() {
  const filtered = pets.filter(arrItem => arrItem.type === "dino")
  render(filtered)
}
function clearFunc() {
  render(pets)
}


render(pets)

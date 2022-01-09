// seprate content from html
let article = [
  {
    title: "Article",
    content: `        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis
    optio commodi delectus consequuntur dicta, adipisci eum velit aliquam
    perferendis fugiat. Eveniet beatae natus quae fugit tempore illo, hic
    magnam provident doloribus labore ducimus itaque, eligendi reprehenderit
    sint laborum adipisci a vitae possimus maxime temporibus dignissimos
    eius dolor laudantium! Aut culpa deleniti sunt ipsa! Quae omnis voluptas
    velit et recusandae modi laudantium facilis facere atque! Accusamus
    labore voluptatibus adipisci sequi fugiat hic non ut, quibusdam sint est
    magni cumque repudiandae quia doloremque cupiditate perspiciatis
    blanditiis libero reprehenderit consequatur et officia atque quas. Dicta
    possimus natus temporibus soluta error illo vero adipisci.`,
  },
  {
    title: "Article",
    content: `        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis
        optio commodi delectus consequuntur dicta, adipisci eum velit aliquam
        perferendis fugiat. Eveniet beatae natus quae fugit tempore illo, hic
        magnam provident doloribus labore ducimus itaque, eligendi reprehenderit
        sint laborum adipisci a vitae possimus maxime temporibus dignissimos
        eius dolor laudantium! Aut culpa deleniti sunt ipsa! Quae omnis voluptas
        velit et recusandae modi laudantium facilis facere atque! Accusamus
        labore voluptatibus adipisci sequi fugiat hic non ut, quibusdam sint est
        magni cumque repudiandae quia doloremque cupiditate perspiciatis
        blanditiis libero reprehenderit consequatur et officia atque quas. Dicta
        possimus natus temporibus soluta error illo vero adipisci.`,
  },
  {
    title: "Article",
    content: `        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis
        optio commodi delectus consequuntur dicta, adipisci eum velit aliquam
        perferendis fugiat. Eveniet beatae natus quae fugit tempore illo, hic
        magnam provident doloribus labore ducimus itaque, eligendi reprehenderit
        sint laborum adipisci a vitae possimus maxime temporibus dignissimos
        eius dolor laudantium! Aut culpa deleniti sunt ipsa! Quae omnis voluptas
        velit et recusandae modi laudantium facilis facere atque! Accusamus
        labore voluptatibus adipisci sequi fugiat hic non ut, quibusdam sint est
        magni cumque repudiandae quia doloremque cupiditate perspiciatis
        blanditiis libero reprehenderit consequatur et officia atque quas. Dicta
        possimus natus temporibus soluta error illo vero adipisci.`,
  },
  {
    title: "Article",
    content: `        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis
        optio commodi delectus consequuntur dicta, adipisci eum velit aliquam
        perferendis fugiat. Eveniet beatae natus quae fugit tempore illo, hic
        magnam provident doloribus labore ducimus itaque, eligendi reprehenderit
        sint laborum adipisci a vitae possimus maxime temporibus dignissimos
        eius dolor laudantium! Aut culpa deleniti sunt ipsa! Quae omnis voluptas
        velit et recusandae modi laudantium facilis facere atque! Accusamus
        labore voluptatibus adipisci sequi fugiat hic non ut, quibusdam sint est
        magni cumque repudiandae quia doloremque cupiditate perspiciatis
        blanditiis libero reprehenderit consequatur et officia atque quas. Dicta
        possimus natus temporibus soluta error illo vero adipisci.`,
  },
  {
    title: "Article",
    content: `        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis
        optio commodi delectus consequuntur dicta, adipisci eum velit aliquam
        perferendis fugiat. Eveniet beatae natus quae fugit tempore illo, hic
        magnam provident doloribus labore ducimus itaque, eligendi reprehenderit
        sint laborum adipisci a vitae possimus maxime temporibus dignissimos
        eius dolor laudantium! Aut culpa deleniti sunt ipsa! Quae omnis voluptas
        velit et recusandae modi laudantium facilis facere atque! Accusamus
        labore voluptatibus adipisci sequi fugiat hic non ut, quibusdam sint est
        magni cumque repudiandae quia doloremque cupiditate perspiciatis
        blanditiis libero reprehenderit consequatur et officia atque quas. Dicta
        possimus natus temporibus soluta error illo vero adipisci.`,
  },
  {
    title: "Article",
    content: `        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis
        optio commodi delectus consequuntur dicta, adipisci eum velit aliquam
        perferendis fugiat. Eveniet beatae natus quae fugit tempore illo, hic
        magnam provident doloribus labore ducimus itaque, eligendi reprehenderit
        sint laborum adipisci a vitae possimus maxime temporibus dignissimos
        eius dolor laudantium! Aut culpa deleniti sunt ipsa! Quae omnis voluptas
        velit et recusandae modi laudantium facilis facere atque! Accusamus
        labore voluptatibus adipisci sequi fugiat hic non ut, quibusdam sint est
        magni cumque repudiandae quia doloremque cupiditate perspiciatis
        blanditiis libero reprehenderit consequatur et officia atque quas. Dicta
        possimus natus temporibus soluta error illo vero adipisci.`,
  },
];

const fetchData = () => {
  // fetch data
  const section = document.getElementsByClassName("articles-section");
  const navUl = document.getElementById("nav-ul");
  const style = `style="margin-left:auto;`;

  article.map((obj, index) => {
    // build buttons
    navUl.innerHTML += `<li><button class="nav-btn" id="${index}">${
      obj.title
    } ${index + 1}</button></li>`;
    // build articles
    section[0].innerHTML += `
      <article id="article-${index}" ${(index + 1) % 2 === 0 ? style : ""}">
      <div id="buble-up"></div>
      <h3 class="article-title">${obj.title} ${index + 1}</h3>
      <p>
          ${obj.content}
      </p>
      <div id="buble-down"></div>
      </article>
  `;
  });
};

const addListnersToBtns = () => {
  // add listners to buttons
  for (let i = 0; i < article.length; i++) {
    document
      .getElementById(`${i}`)
      .addEventListener("click", () =>
        document
          .getElementById(`article-${i}`)
          .scrollIntoView({ behavior: "smooth", block: "start" })
      );
  }
};

//add active class
const addActiveClass = () => {
  const main = document.getElementsByTagName("main")[0];
  const articlesTag = document.querySelectorAll("article");
  const buttons = document.querySelectorAll("button");

  main.addEventListener("scroll", () => {
    articlesTag.forEach((article, index) => {
      if (
        main.scrollTop >= article.offsetTop &&
        main.scrollTop < article.offsetTop + article.offsetHeight
      ) {
        buttons[index].classList.add("active");
        article.classList.add("active");
      } else {
        buttons[index].classList.remove("active");
        article.classList.remove("active");
      }
    });
  });
};

// Go Top button
const topButton = () => {
  const btn = document.getElementById("float-button");
  const main = document.getElementsByTagName("main")[0];

  main.addEventListener("scroll", () => {
    if (main.scrollTop >= 600) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  });
};

// on click listner for top button
const topButtonListner = () => {
  const btn = document.getElementById("float-button");
  const main = document.getElementsByTagName("main")[0];
  btn.addEventListener("click", () => main.scrollTo(0, 0));
};

fetchData();
addListnersToBtns();
addActiveClass();
topButton();
topButtonListner();

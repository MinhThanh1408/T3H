const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};

const showDetail = (item) => {
  const itemDetail = `
<img src=${item.avatar} alt=""/>   
<h2> ${item.name}   </h2>
<p>${item.createdAt}</p>
    `;
  document.querySelector("#detail").innerHTML = itemDetail;
};

const deleteUser = (id) => {
  fetch(`https://649045621e6aa71680caeca7.mockapi.io/user/${id}`, {
    method: "DELETE",
  })
    .then((res) => {
      if (res.ok) {
        window.location.reload(true);
        return res.json();
      }
    })
    .catch((error) => {
      console.log("Error", error);
    });
};

fetchData("https://649045621e6aa71680caeca7.mockapi.io/user").then((data) => {
  const items = data.map((item) => {
    return `
        <div class="content-item" onClick='showDetail(${JSON.stringify(item)
          .split('"')
          .join("&quot;")})'>
            <img src=${item.avatar} alt="Avatar" />
            <span>${item.name}</span>
            <span>${item.createdAt}</span>
            <button type="button" onClick='showDetail(${JSON.stringify(item)
              .split('"')
              .join("&quot;")})'>Detail</button>    
            <button type="button" onClick={deleteUser(${
              item.id
            })}>Delete</button>
        </div>
        `;
  });
  document.querySelector("#content").innerHTML = items.join("");
});

const addUser = () => {
  const name = document.querySelector("#create-username").value.trim();
  const link = document.querySelector("#create-link-image").value.trim();
  const newUser = {
    name: name,
    image: link,
  };

  fetch("https://649045621e6aa71680caeca7.mockapi.io/user", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(newUser),
  })
    .then((res) => {
      if (res.ok) {
        window.location.reload(true);
        return res.json();
      }
      // handle error
    })
    .then((task) => {
      // do something with the new task
    })
    .catch((error) => {
      console.log(error);
    });
};

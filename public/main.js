console.log("hi");

//挑战1
getCSS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/style.css");
  request.onreadystatechange = () => {
    console.log(request.readyState);
    if (request.readyState === 4) {
      if (request.status === 200) {
        const style = document.createElement("style");
        style.innerHTML = request.response;
        document.head.appendChild(style);
        let p1 = document.createElement("p");
        p1.innerHTML = "请求CSS完成 h1标签颜色为红";
        output.appendChild(p1);
      } else {
        alert("加载 CSS 失败");
      }
    }
  };
  request.send();
};
//挑战2
getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/2.js");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const script = document.createElement("script");
      script.innerHTML = request.response;
      document.body.appendChild(script);
    }
  };
  request.send();
};
//挑战3
getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/3.html");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const div = document.createElement("div");
      div.innerHTML = request.response;
      output.appendChild(div);
    }
  };
  request.send();
};
//挑战4
getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/4.xml");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const dom = request.responseXML;
      const text = dom.getElementsByTagName("warning")[0].textContent;
      console.log(text.trim());
      let p4 = document.createElement("p");
      p4.innerHTML = "请求XML完成";
      output.appendChild(p4);
    }
  };
  request.send();
};
//挑战5
getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "/5.json");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.response);
      const json = JSON.parse(request.response);
      console.log(json);
      let p5 = document.createElement("p");
      p5.innerHTML = "请求JSON完成";
      output.appendChild(p5);
    }
  };
  request.send();
};
//挑战6
let n = 1;
getPage.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", `/page${n + 1}`);
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const array = JSON.parse(request.response);
      array.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item.id;
        xxx.appendChild(li);
      });
      n += 1;
    }
  };
  request.send();
};

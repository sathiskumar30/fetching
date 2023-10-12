import { useEffect, useState } from "react";
import "./index.css";

function App() {
  const [state, setState] = useState(0);

  useEffect(() => {
    const params = {
      route: "home",
      page_no: 1,
      page_size: 16,
    };
    const options = {
      method: "POST",
      body: JSON.stringify(params),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(
      "https://indiaretailing.go1cms.com/api/method/go1_cms.go1_cms.api.get_page_content_with_pagination",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setState(response);
      });
  }, []);

  return (
    <div className="app">
      <header>
        <h3>Indiaretailing</h3>
        <div>
          <a>Home</a>
          <a>about</a>
          <a>login</a>
        </div>
      </header>

      <aside>
        <section className="left">
          {state &&
            state.message.page_content[0].data[1696053346559].data.map(
              (item) => (
                <Item
                  item={item}
                  location={item.location}
                  blog_inyto={item.blog_intro}
                  image={item.image}
                />
              )
            )}
          {state &&
            state.message.page_content[4].data[1694079986842].data.map(
              (item) => (
                <Item
                  item={item}
                  location={item.location}
                  blog_inyto={item.blog_intro}
                  image={item.image}
                />
              )
            )}
             {state &&
            state.message.page_content[5].data[1696860247437].data.map(
              (item) => (
                <Item
                  item={item}
                  location={item.location}
                  blog_inyto={item.blog_intro}
                  image={item.image}
                />
              )
            )}
        </section>
        <section className='main'>
          {state &&
            state.message.page_content[1].data[1696664971847].data.map(
              (item,i) => (
                <Item2
                  item={item}
                  i={i+1}
                />
              )
            )}
        </section>
        
      </aside>
    
    </div>
  );
}

function Item({ item,i }) {
  return (
    <div className={`item item${i}`} >
      <img src="https://indiaretailing.go1cms.com/files/Screenshot%202023-09-09%20114531.png" alt="" srcset="" />

      <div className="des" >
        <h3>{item.title}</h3>
        <p>{item.blog_intro}</p>
        <p>{item.location}</p>
      </div>
    </div>
  );
}

function Item2({ item,i }) {
  return (
    <div className={`item2s item${i}`} style={{backgroundImage:"url(https://indiaretailing.go1cms.com/files/Screenshot%202023-09-09%20114531.png)"}}>
  

      <div className="des" >
        <h3>{item.title}</h3>
        <p>{item.blog_intro}</p>
        <p>{item.location}</p>
      </div>
    </div>
  );
}
export default App;

//   return <div className="app">
//      {state&&state.message.page_content[0].data[1696053346559
// ].data.map(item=><Item item={item}  location={item.location} blog_inyto={item.blog_intro} image={item.image}  />)}
//    {state&&state.message.page_content[1].data[1696664971847].data.map(item=><Item item={item}  location={item.location} blog_inyto={item.blog_intro} image={item.image} />)}

//    {state&&state.message.page_content[2].data[1695980632344].data.map(item=><Item item={item}  location={item.location} blog_inyto={item.blog_intro} image={item.image} />)}

//    {state&&state.message.page_content[3].data[1694067777148].data.map(item=><Item item={item}  location={item.location} blog_inyto={item.blog_intro} image={item.image} />)}

//    {state&&state.message.page_content[4].data[1694079986842].data.map(item=><Item item={item}  location={item.location} blog_inyto={item.blog_intro} image={item.image} />)}

//    {state&&state.message.page_content[5].data[1696860247437].data.map(item=><Item item={item}  location={item.location} blog_inyto={item.blog_intro} image={item.image} />)}
//   </div>

import React from "react";

const qnaData = [
  {
    q: "What is Context Api",
    a: [
      "There many hooks are introduced in the 2 or 3 earlier versions of REACT.",
      "Context Api is a special kind of hooks",
      "Context Api replaces Redux",
      "Context Api solves deep prop-drilling",
      "Before Context Api if we want share state with deeply nested components we had share the state via props of every child components. That was very painful",
      "When we have Context Api, we wrap parent component with a provider provided by context Api",
      "And we also export the context to use it on other places",
      "Then in any child component we can call useContext hook with the imported context",
      "At last in this way we can share our states without the pain of props-drilling",
    ],
  },
  {
    q: "What is Semantic Tags",
    a: [
      "Semantic Tags indicates what they actually are",
      "Semantic Elements provide the real meaning to browser and to the coders",
      "Bold tag doesn't mean anything except displaying something on the webpage",
      "But for example, <p> Paragraph element gives us the proper meaning to it's tagname and it clearly tells us to be a paragraph",
      "And also helps the browser to render the <p> tag as a paragraph",
      "Using Semantic Elements we can logically sectionize our webpage. So that any reader and also browser can detect and show every elements properly on the web page",
      "There are many semantic tags introduces in HTML5",
      "header, footer, main, section. article, aside, etc",
    ],
  },
  {
    q: "block vs inline-block elements",
    a: [
      "Block elements starts on a new line, But inline-block elements doesn't starts on a new line",
      "Block elements takes up full width of a webpage, but inline-block elements takes as much width as it's content width",
      "For both block elements and inline-block elements browsers add some padding and margin as default before and after the elements",
      "Unlike inline elements, we can add our custom padding and margin to the inline-block elements like block elements",
      "For example <div> is a block level element and <span> is a inline-block level element.",
    ],
  },
];

const QnA = () => {
  return (
    <section className="container mt-5">
      <h2 className="text-center text-success">FAQ for this Assignment :)</h2>
      <div className="qna-container row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2 mt-3">
        {qnaData.map((item, index) => (
          <div key={index} className="col">
            <article
              style={styles.article}
              className="qna border border-success rounded shadow"
            >
              <div
                style={styles.qContainer}
                className="q-container d-flex align-items-center justify-content-between bg-light p-3"
              >
                <h3 className="fs-4 text-danger text-center w-100">{item.q}</h3>
                <i className="fa-solid fa-chevron-down fs-4 text-primary"></i>
              </div>
              <div className="a-container p-3">
                <ul style={styles.answer}>
                  {item.a.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  qContainer: {
    borderBottomWidth: "2px",
    borderBottomStyle: "solid",
    borderColor: "gray",
  },

  answer: {
    textAlign: "justify",
    textJustify: "inter-word",
  },
  article: { height: "100%" },
};

export default QnA;

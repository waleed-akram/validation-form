import "./book.css";

export default function () {
  return (
    <div className="book-container">
      <h1 className="heading-book">Made with Flex Box</h1>
      <div className="book" id="book">
        <div className="chapters">
          <a href="mailto:waleed.akram42069@gmail.com">Buy me a Coffee !</a>
          <p className="chapter" id="1">
            <span>Chapter # 01</span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ut
            deserunt nostrum! Magni, officia aperiam. Adipisci, nam illum modi,
            excepturi deserunt, quod nemo perspiciatis iure architecto sequi ex
            praesentium deleniti.
          </p>
          <p className="chapter" id="2">
            <span>Chapter # 02</span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ut
            deserunt nostrum! Magni, officia aperiam. Adipisci, nam illum modi,
            excepturi deserunt, quod nemo perspiciatis iure architecto sequi ex
            praesentium deleniti.
          </p>
          <p className="chapter" id="3">
            <span>Chapter # 03</span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ut
            deserunt nostrum! Magni, officia aperiam. Adipisci, nam illum modi,
            excepturi deserunt, quod nemo perspiciatis iure architecto sequi ex
            praesentium deleniti.
          </p>
          <p className="chapter" id="4">
            <span>Chapter # 04</span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ut
            deserunt nostrum! Magni, officia aperiam. Adipisci, nam illum modi,
            excepturi deserunt, quod nemo perspiciatis iure architecto sequi ex
            praesentium deleniti.
          </p>
          <a href="#book">Go to top</a>
        </div>
        <aside className="Bookmarks">
          <p>Bookmarks</p>
          <a href="#1">Go to Ch # 1</a>
          <a href="#2">Go to Ch # 2</a>
          <a href="#3">Go to Ch # 3</a>
          <a href="#4">Go to Ch # 4</a>
        </aside>
      </div>
    </div>
  );
}

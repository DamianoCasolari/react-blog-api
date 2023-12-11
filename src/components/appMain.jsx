import { useEffect, useState } from "react";
import { AppOverlay } from "./appOverlay";

export function AppMain() {
  const [postsList, setpostsList] = useState([]);
  const [showOverlay, setshowOverlay] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((response) => response.json())
      .then((data) => {
        // postsList = data.data;
        // console.log(postsList);
        setpostsList(data.data);
      });
  }, []);

  return (
    <>
      <main className="flex justify-center p-10 relative">
        <button
          onClick={() => setshowOverlay((showOverlay) => !showOverlay)}
          className="add_post_btn absolute top-[10px] right-[20px] flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="white"
            className={`bi bi-file-plus + ${
              showOverlay ? "rotation_effect" : ""
            } `}
            viewBox="0 0 16 16"
          >
            <path d="M8.5 6a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V10a.5.5 0 0 0 1 0V8.5H10a.5.5 0 0 0 0-1H8.5z" />
            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1" />
          </svg>
          <div className="text-xl text-stone-200">Add Post</div>
        </button>
        <AppOverlay
          showOverlay={showOverlay}
          setshowOverlay={setshowOverlay}
        ></AppOverlay>
        <div className="posts_container flex flex-wrap w-full">
          {postsList.map((post) => {
            if (post.published) {
              return (
                <div
                  key={post.id}
                  className=" post_card flex items-center justify-center w-full md:w-6/12 lg:w-4/12 p-4"
                >
                  <div className="post flex flex-col justify-between rounded-2xl w-full h-full p-4 hover:scale-[1.02] duration-500">
                    <h2 className="text-[30px]  text-stone-100 font-bold">
                      {post.title}
                    </h2>
                    <img
                      src={post.image}
                      className=" h-full"
                      alt=" l'immagine non è presente"
                    />
                    <p className="text-end text-stone-100">{post.content}</p>
                    <div className="tags_container flex flex-wrap">
                      <div className="font-bold text-stone-100">
                        {post.tags.map((tag) => tag.name)}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </main>
    </>
  );
}

import { useEffect, useState } from "react";

export function AppOverlay({ showOverlay, setshowOverlay }) {
  //   useEffect(() => {}, [showOverlay]);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState("");
  const [isPublished, setIsPublished] = useState(false);
  const [editMode, setEditMode] = useState(false);

  function handleTitle(e) {
    setTitle(e.target.value);
  }

  function handleImage(e) {
    setImage(e.target.value);
  }

  function handleContent(e) {
    setContent(e.target.value);
  }

  function handleContent(e) {
    setContent(e.target.value);
  }

  function handleCategory(e) {
    setCategory(e.target.value);
  }

  function handleTags(e) {
    if (!tags.includes(e.target.value)) {
      setTags((tags) => [...tags, e.target.value]);
    } else {
      setTags((tags) => {
        return tags.filter((tag) => tag != e.target.value);
      });
    }
  }

  function handleIsPublished(e) {
    setIsPublished((isPublished) => !isPublished);
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({
        title: title,
        image: image,
        content: content,
        categoryId: category,
        published: isPublished,
        tags: tags,
      }),
    })
      .then((promise) => {
        if (promise.ok) {
          setTitle("");
          setImage("");
          setContent("");
          setCategory("");
          setTags([]);
          setIsPublished(false);
          setEditMode(false);
          setshowOverlay(false);
        }
        return promise.json();
      })
      //   .then((promise) => promise.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Fetch error:", error.message));
  }

  return (
    <div
      className={`overlay absolute  bg-slate-100 h-full w-11/12 md:w-10/12 lg:w-8/12 rounded-2xl duration-500 ${
        showOverlay ? "opacity-100 z-20" : "opacity-0 z-[-1]"
      }`}
    >
      <form
        action="http://localhost:3000/posts"
        method="POST"
        className="flex flex-col justify-between mx-3 h-full md:p-4"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col mb-4">
          <label htmlFor="title" className="py-3 font-bold mx-3">
            Title
          </label>
          <input
            className="title_input outline-0 rounded-xl mx-3 px-3"
            id="title"
            type="text"
            value={title ?? ""}
            onChange={handleTitle}
            name="title"
            placeholder="Inserisci il titolo del post"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="image" className="py-3 font-bold mx-3">
            image
          </label>
          <input
            className="title_input outline-0 rounded-xl mx-3 px-3"
            id="image"
            type="text"
            value={image ?? ""}
            onChange={handleImage}
            name="image"
            placeholder="Inserisci il titolo del post"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="content" className="py-3 font-bold mx-3">
            Description
          </label>
          <input
            className="title_input outline-0 rounded-xl px-3 mx-3"
            id="content"
            type="text"
            value={content ?? ""}
            onChange={handleContent}
            name="content"
            placeholder="Inserisci il titolo del post"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="category" className="py-3 font-bold mx-3">
            Category
          </label>
          <select
            name="category"
            id="category"
            value={category}
            className="rounded-xl mx-3 px-3"
            onChange={handleCategory}
          >
            <option value="0">Select category</option>
            <option value="1">Front-end</option>
            <option value="2">Back-end</option>
            <option value="3">Full-stack</option>
            <option value="4">App Smartphone</option>
          </select>
        </div>
        <section className="tags_section flex flex-wrap justify-around mt-2 ">
          <section className="tags_container flex items-center mt-1 me-3">
            <label htmlFor="html" className="py-3 font-bold TEXT-[20px]">
              HTML
            </label>
            <input
              id="html"
              type="checkbox"
              value={0}
              checked={tags?.includes("0")}
              onChange={handleTags}
              className="appearance-none border border-gray-300 rounded-md checked:bg-sky-800  checked:border-transparent focus:outline-none focus:ring focus:border-blue-300 mx-2 w-5 h-5"
            />
          </section>
          <div className="tags_container flex items-center mt-1 me-3">
            <label htmlFor="css" className="py-3 font-bold TEXT-[20px]">
              CSS
            </label>
            <input
              id="css"
              type="checkbox"
              value={1}
              checked={tags?.includes("1")}
              onChange={handleTags}
              className="appearance-none border border-gray-300 rounded-md checked:bg-sky-800  checked:border-transparent focus:outline-none focus:ring focus:border-blue-300 mx-2 w-5 h-5"
            />
          </div>
          <div className="tags_container flex items-center mt-1 me-3">
            <label htmlFor="javascript" className="py-3 font-bold TEXT-[20px]">
              JAVASCRIPT
            </label>
            <input
              id="javascript"
              type="checkbox"
              value={2}
              checked={tags?.includes("2")}
              onChange={handleTags}
              className="appearance-none border border-gray-300 rounded-md checked:bg-sky-800  checked:border-transparent focus:outline-none focus:ring focus:border-blue-300 mx-2 w-5 h-5"
            />
          </div>
          <div className="tags_container flex items-center mt-1 me-3">
            <label htmlFor="php" className="py-3 font-bold TEXT-[20px]">
              PHP
            </label>
            <input
              id="php"
              type="checkbox"
              value={3}
              checked={tags?.includes("3")}
              onChange={handleTags}
              className="appearance-none border border-gray-300 rounded-md checked:bg-sky-800  checked:border-transparent focus:outline-none focus:ring focus:border-blue-300 mx-2 w-5 h-5"
            />
          </div>
          <div className="tags_container flex items-center mt-1 me-3">
            <label htmlFor="laravel" className="py-3 font-bold TEXT-[20px]">
              LARAVEL
            </label>
            <input
              id="laravel"
              type="checkbox"
              value={4}
              checked={tags?.includes("4")}
              onChange={handleTags}
              className="appearance-none border border-gray-300 rounded-md checked:bg-sky-800  checked:border-transparent focus:outline-none focus:ring focus:border-blue-300 mx-2 w-5 h-5"
            />
          </div>
        </section>
        <div className="published_container flex items-center justify-center border-[2px] my-3">
          <label htmlFor="published" className="py-3 font-bold TEXT-[20px]">
            Published
          </label>
          <input
            id="published"
            type="checkbox"
            value={isPublished}
            checked={isPublished}
            onChange={handleIsPublished}
            className="appearance-none border border-gray-300 rounded-md checked:bg-sky-800  checked:border-transparent focus:outline-none focus:ring focus:border-blue-300 mx-2 w-5 h-5"
          />
        </div>
        <button className="px-3 py-2 my-4 bg-sky-800 rounded-3xl text-white font-bold">
          {editMode === false ? "Add post" : "Edit post"}
        </button>
      </form>
    </div>
  );
}

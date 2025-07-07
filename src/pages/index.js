// import { useState, useEffect } from "react";
// import Canvas from "@/components/Canvas";
// import Sidebar from "@/components/Sidebar";
// import Controls from "@/components/Controls";

// export default function Home() {
//   const [items, setItems] = useState([]);
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     const loaded = {
//       accessories: [
//         { src: "/icons/accessories/belt.jpg", type: "accessories" },
//         { src: "/icons/accessories/belt2.webp", type: "accessories" },
//         { src: "/icons/accessories/cap.png", type: "accessories" },
//         { src: "/icons/accessories/hat.png", type: "accessories" },
//         { src: "/icons/accessories/sunglasses.jpg", type: "accessories" },
//       ],
//       tops: [
//         { src: "/icons/tops/top1.webp", type: "tops" },
//         { src: "/icons/tops/top2.jpg", type: "tops" },
//         { src: "/icons/tops/top3.jpg", type: "tops" },
//         { src: "/icons/tops/top4.png", type: "tops" },
//         { src: "/icons/tops/top5.png", type: "tops" },
//       ],
//       bottoms: [
//         { src: "/icons/bottoms/bottom1.webp", type: "bottoms" },
//         { src: "/icons/bottoms/bottom2.webp", type: "bottoms" },
//         { src: "/icons/bottoms/bottom3.jpg", type: "bottoms" },
//         { src: "/icons/bottoms/bottom4.png", type: "bottoms" },
//         { src: "/icons/bottoms/bottom5.png", type: "bottoms" },
//       ],
//       shoes: [
//         { src: "/icons/shoes/shoes1.webp", type: "shoes" },
//         { src: "/icons/shoes/shoes2.webp", type: "shoes" },
//         { src: "/icons/shoes/shoes3.jpg", type: "shoes" },
//         { src: "/icons/shoes/shoes4.jpg", type: "shoes" },
//         { src: "/icons/shoes/shoes5.png", type: "shoes" },

//       ],
//     };

//     setImages(loaded);
//   }, []);

//   return (
//     <div className="container">
//       <h1>Outfit Builder</h1>
//       <div className="builder">
//         <Sidebar images={images} />
//         <Canvas items={items} setItems={setItems} />
//       </div>
//       <Controls items={items} setItems={setItems} />
//     </div>
//   );
// }




import { useState, useEffect } from "react";


const icons = {
  accessories: [
    { src: "/icons/accessories/belt.jpg", type: "accessories" },
    { src: "/icons/accessories/belt2.webp", type: "accessories" },
    { src: "/icons/accessories/cap.png", type: "accessories" },
    { src: "/icons/accessories/hat.png", type: "accessories" },
    { src: "/icons/accessories/sunglasses.jpg", type: "accessories" },
  ],
  tops: [
    { src: "/icons/tops/top1.webp", type: "tops" },
    { src: "/icons/tops/top2.jpg", type: "tops" },
    { src: "/icons/tops/top3.jpg", type: "tops" },
    { src: "/icons/tops/top4.png", type: "tops" },
    { src: "/icons/tops/top5.png", type: "tops" },
  ],
  bottoms: [
    { src: "/icons/bottoms/bottom1.webp", type: "bottoms" },
    { src: "/icons/bottoms/bottom2.webp", type: "bottoms" },
    { src: "/icons/bottoms/bottom3.jpg", type: "bottoms" },
    { src: "/icons/bottoms/bottom4.png", type: "bottoms" },
    { src: "/icons/bottoms/bottom5.png", type: "bottoms" },
  ],
  shoes: [
    { src: "/icons/shoes/shoes1.webp", type: "shoes" },
    { src: "/icons/shoes/shoes2.webp", type: "shoes" },
    { src: "/icons/shoes/shoes3.jpg", type: "shoes" },
    { src: "/icons/shoes/shoes4.jpg", type: "shoes" },
    { src: "/icons/shoes/shoes5.png", type: "shoes" },
  ],
};

export default function Home() {
  const [items, setItems] = useState([]);
  const [images, setImages] = useState({});

  useEffect(() => {
    setImages(icons);
  }, []);

  const handleDrop = (img) => {
    setItems((prev) => [...prev, img]);
  };

  const resetOutfit = () => setItems([]);

  const groupedItems = items.reduce((acc, item) => {
    acc[item.type] = acc[item.type] || [];
    acc[item.type].push(item);
    return acc;
  }, {});

  return (
    <div className="container">
      <h1 className="title">Outfit Builder</h1>
      <div className="builder">
        <div className="sidebar scrollable">
          {Object.entries(images).map(([type, items]) => (
            <div key={type}>
              {items.map((img, index) => (
                <img
                  key={index}
                  src={img.src}
                  alt="item"
                  draggable
                  onDragStart={(e) => {
                    e.dataTransfer.setData("item", JSON.stringify(img));
                  }}
                />
              ))}
            </div>
          ))}
        </div>
        <div
          className="canvas"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            const data = e.dataTransfer.getData("item");
            if (data) handleDrop(JSON.parse(data));
          }}
        >
          <span className="canvas-label">CANVAS AREA</span>
          {Object.entries(groupedItems).map(([type, group], i) => (
            <div key={i} className="canvas-row">
              {group.map((item, j) => (
                <img
                  key={j}
                  src={item.src}
                  alt={item.type}
                  className="dropped-item"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="controls">
        <button onClick={resetOutfit}>Reset</button>
        <button onClick={() => console.log("Saved", items)}>Save Outfit</button>
        <button onClick={() => alert("Added to cart")}>Add to Cart 🛒</button>
      </div>
    </div>
  );
}

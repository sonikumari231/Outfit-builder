



# 👗 Outfit Builder – Next.js (Drag & Drop Clothing Editor)

This is a web-based WYSIWYG (What You See Is What You Get) outfit builder built using **Next.js**. It allows users to drag and drop clothing icons onto a virtual canvas, visualize outfit combinations, and add selected outfits to a shopping cart.

---

## 🚀 Features

- 🡥 Drag-and-drop clothing items (e.g., shirts, jackets, jeans, shoes)
- 🎯 Visual canvas to layer and position clothing
- 🛒 "Add to Cart" functionality
- ⚡ Built with Next.js for performance and scalability
- 🧠 Clean, intuitive user interface using custom CSS (no Tailwind)

---

## 🛆 Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- HTML5 Drag-and-Drop API
- react-dnd + react-dnd-html5-backend (for enhanced drag-and-drop experience)

---

## 🛠️ Installation

### 1. Clone the Repository

```bash
git clone (https://github.com/sonikumari231/Outfit-Builder.git)
cd outfit-builder
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Install Drag and Drop Dependencies (Optional)

If you want to use advanced drag-and-drop features:
```bash
npm install react-dnd react-dnd-html5-backend
```

### 4. Start the Development Server

```bash
npm run dev
```

App will be available at [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
/public/icons         # Clothing item images (e.g., tshirt.png, shoes.png)
pages/index.js        # Main drag-and-drop editor
styles/               # Custom CSS styling (optional)
```

---

## 🧪 How to Use

1. Drag an item from the left panel.
2. Drop it anywhere on the canvas to build your outfit.
3. Click **"Add to Cart"** to simulate selection (for now, a popup appears).
4. Combine as many clothing items as you'd like.

---

## 📌 Assets

Clothing icons must be placed under `public/icons/`. Example:
```
public/icons/tshirt.png
public/icons/jeans.png
public/icons/jacket.png
```

---

## ✨ Future Enhancements

- User authentication & saved outfit history
- Real shopping cart + checkout flow
- Mobile responsiveness
- Undo/redo functionality

---


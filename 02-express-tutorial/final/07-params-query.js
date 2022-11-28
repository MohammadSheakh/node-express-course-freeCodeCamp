const express = require("express");
const app = express();
const { products } = require("./data");

app.get("/", (req, res) => {
    res.send('<h1> Home Page</h1><a href="/api/products">products</a>');
});
app.get("/api/products", (req, res) => {
    const newProducts = products.map((product) => {
        const { id, name, image } = product;
        return { id, name, image };
    });

    res.json(newProducts);
});
app.get("/api/products/:productID", (req, res) => {
    // console.log(req)
    // console.log(req.params)
    const { productID } = req.params;

    const singleProduct = products.find(
        (product) => product.id === Number(productID)
    );
    if (!singleProduct) {
        return res.status(404).send("Product Does Not Exist");
    }

    return res.json(singleProduct);
});

app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
    console.log(req.params);
    res.send("hello world");
});

app.get("/api/v1/query", (req, res) => {
    // console.log(req.query)
    const { search, limit } = req.query; // ami jei jei jinish gula query hishebe khujtesi .. shegula
    // bole dilam ... user jodi egula na bole .. taile amra user ke shob gula product send korbo ..
    let sortedProducts = [...products]; // amra array ta ke copy kore nilam ..
    // karon array ta ke amra modify korbo ..

    if (search) {
        // query string parameters er moddhe search kotha ta thakle ..
        // sort korar pore sorted result gula rakhar jonno .. ekta variable nilam ..
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search); // search query er moddhe jei value ase sheita ...
        });
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit)); // joto gula result ashse .. er moddhe limited
        // result publish korbo ..
    }
    if (sortedProducts.length < 1) {
        // res.status(200).send('no products matched your search');
        return res.status(200).json({ success: true, data: [] }); // request successful chilo .. but kono
        // data paowa jay nai ..
    }
    res.status(200).json(sortedProducts);
});

app.listen(5000, () => {
    console.log("Server is listening on port 5000....");
});

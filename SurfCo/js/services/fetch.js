const getData = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
        console.log("Error!");
    }

    return await res.json();
};

export {getData};
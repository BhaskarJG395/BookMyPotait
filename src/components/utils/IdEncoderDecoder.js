
// Encode ID
export const encodeId = (id) => {

    const a = id.toString();
    const b=btoa(a);
    console.log("id: "+id+" b: "+b);
    return b; // Base64 encoding
};

// Decode ID
export const decodeId = (encodedId) => {
    const b = atob(encodedId); // Base64 decoding
    console.log("b:"+b+" encodedId: "+encodeId);
    return parseInt(b, 10);
};

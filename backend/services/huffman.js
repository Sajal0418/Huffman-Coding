// Defining huffman classes

class HuffmanNode{
    constructor(char,freq){
        this.char=char; //character stores in this node
        this.freq=freq; //frequency of a particular character
        this.left=null; // left child node
        this.right=null; // right child node
    }
}

function buildHuffmanTree(text){
    //Creating map to store the frequency for each character
    const freqMap= new Map();

    for(const char of text){
        if(!freqMap.has(char)){
            // if character is not in map, initialize it's frequency to 0
            if(!freqMap.has(char)){
                freqMap.set(char,0);
        }

        // Increamenting the frequency
        freqMap.set(char,freqMap.get(char)+1);
    }
}
}
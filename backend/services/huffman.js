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
    const heap=[...freqMap.entries()].map(([char,freq]) => new HuffmanNode(char,freq));
    // sort the heap based on frequency
    heap.sort((a,b) => a.freq-b.freq);

    while (heap.length>1){
        const left=heap.shift();
        const right=heap.shift();
        //Create a new node with null character and sum of frequencies of left and right 
        const newNode=new HuffmanNode(null,left.freq+right.freq);

        newNode.left=left;
        newNode.right=right;
        // Add the new node back to heap
        heap.push(newNode);
        // Resort the new heap
        heap.sort((a,b) => a.freq-b.freq);
    }
    return heap[0];
}

function generateCodes(node, prefix = '',codeMap={}){
    if(node.char!=null){
        codeMap[node.char]=prefix;
    }else{
        //Recursively generating left child with append '0' to prefix
        generateCodes(node.left,prefix + '0', codeMap);
        //Recursively generating right child with append '1' to prefix
        generateCodes(node.right,prefix +'1',codeMap);
    }
    return codeMap;
}

function compress(text){
    const huffmanTree=buildHuffmanTree(text);
    const codes=generateCodes(huffmanTree);
    let compressedText='';
    // Encode each character in the input text using its corresponding Huffman code
    for(const char of text){
        compressedText+=codes[char];
    }
    return compressedText;
}

module.exports={compress};
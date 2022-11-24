// import data from "../assets/quotes.json" assert { type: 'json' };
import * as fs from 'fs';
import { fileURLToPath } from 'url';
import * as path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



export default function GetRandomQuote() {
    let raw = fs.readFileSync(path.resolve(__dirname, "../assets/quotes.json"));
    let quotes = JSON.parse(raw);
    let allQuotes = Object.keys(quotes);
    
    
    let randomIndex = Math.floor(Math.random() * allQuotes.length);
    let quote = quotes[randomIndex];
    return quote;
}



// module.exports  = GetRandomQuote(JSON.parse(raw));
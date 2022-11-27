import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

//Defines the filesystem path using the current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Retrieves a random GLaDOS quote from quotes.json
 * @returns {String} String - Glados quote
 */
const GetQuote = () => {
  let raw = fs.readFileSync(path.resolve(__dirname, "../assets/quotes.json"));
  let quotes = JSON.parse(raw);
  let allQuotes = Object.keys(quotes);

  let randomIndex = Math.floor(Math.random() * allQuotes.length);
  return quotes[randomIndex];
};

const Glados = {
  GetQuote,
};

export { Glados };

// module.exports  = GetRandomQuote(JSON.parse(raw));

declare module "javascript" {
}

interface JSON {
    stringify(object: any, toEncodable?: Function);
    parse(input: string);
}

interface console {
    log(...objects: any[]): void;
}

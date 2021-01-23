import {DataGeneratorUtils} from "great-jsutils";

export class GCodeUtils {

    static letter({number = 1, upperCase = true, length = 1} = {}): Array<string> | string {
        return DataGeneratorUtils.letter({size: number, upperCase , length})
    }
}
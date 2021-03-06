import {Column} from "../../../src/decorator/columns/Column";
import {Person} from "./Person";
import {DiscriminatorValue} from "../../../src/decorator/DiscriminatorValue";
import {SingleEntityChild} from "../../../src/decorator/entity/SingleEntityChild";

@SingleEntityChild()
@DiscriminatorValue("home-sitter") // can be omitted
export class Homesitter extends Person {

    @Column()
    numberOfKids: number;

}
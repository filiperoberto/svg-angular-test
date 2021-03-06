import { SvgObject } from './object';

export class Rect extends SvgObject {
    public type = 'rect';
    private width = 100;
    private height = 100;
    private rx = 0;
    private ry = 0;
}

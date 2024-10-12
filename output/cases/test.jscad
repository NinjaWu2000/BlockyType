function board_extrude_2_outline_fn(){
    return new CSG.Path2D([[-9.1832276,-11.2658036],[-18.7338773,42.8986228]]).appendArc([-17.9227177,44.0570788],{"radius":1,"clockwise":true,"large":false}).appendPoint([-0.1961783,47.1827459]).appendArc([0.6149813,48.3412019],{"radius":1,"clockwise":false,"large":false}).appendPoint([0.0940369,51.2956251]).appendArc([0.9051965,52.4540811],{"radius":1,"clockwise":true,"large":false}).appendPoint([21.2048554,56.0334586]).appendArc([21.822766,56.4071734],{"radius":1,"clockwise":false,"large":false}).appendPoint([28.8408975,65.4978743]).appendArc([29.6324563,65.8867813],{"radius":1,"clockwise":true,"large":false}).appendPoint([48.1411384,65.8867813]).appendArc([49.1411384,66.8867813],{"radius":1,"clockwise":false,"large":false}).appendPoint([49.1411384,74.8867813]).appendArc([50.1411384,75.8867813],{"radius":1,"clockwise":true,"large":false}).appendPoint([70.1411383,75.8867813]).appendArc([71.1411383,74.8867813],{"radius":1,"clockwise":true,"large":false}).appendPoint([71.1411383,66.8867813]).appendArc([72.1411383,65.8867813],{"radius":1,"clockwise":false,"large":false}).appendPoint([90.1411383,65.8867813]).appendArc([91.1411383,64.8867813],{"radius":1,"clockwise":true,"large":false}).appendPoint([91.1411383,61.8867813]).appendArc([92.1411383,60.8867813],{"radius":1,"clockwise":false,"large":false}).appendPoint([132.142817,60.8867813]).appendArc([133.1428156,59.8884613],{"radius":1,"clockwise":true,"large":false}).appendPoint([133.2538011,-6.1723511]).appendArc([133.6802233,-6.9898231],{"radius":1,"clockwise":false,"large":false}).appendPoint([145.9515307,-15.582285]).appendArc([146.1971063,-16.9750134],{"radius":1,"clockwise":true,"large":false}).appendPoint([135.2991539,-32.5389024]).appendArc([133.9064255,-32.784478],{"radius":1,"clockwise":true,"large":false}).appendPoint([117.166012,-21.0627142]).appendArc([116.874829,-20.9225675],{"radius":1,"clockwise":false,"large":false}).appendPoint([115.2606195,-20.4473849]).appendArc([115.2370451,-20.4407578],{"radius":1,"clockwise":false,"large":false}).appendPoint([89.9091064,-13.6541571]).appendArc([89.1679262,-12.6894728],{"radius":1,"clockwise":true,"large":false}).appendPoint([89.1423783,7.8880227]).appendArc([88.1423791,8.8867812],{"radius":1,"clockwise":false,"large":false}).appendPoint([70.1411383,8.8867812]).appendArc([69.1411383,9.8867812],{"radius":1,"clockwise":true,"large":false}).appendPoint([69.1411383,17.8867812]).appendArc([68.1411383,18.8867812],{"radius":1,"clockwise":false,"large":false}).appendPoint([52.1411383,18.8867812]).appendArc([51.1411383,17.8867812],{"radius":1,"clockwise":false,"large":false}).appendPoint([51.1411383,9.8867812]).appendArc([50.1411383,8.8867812],{"radius":1,"clockwise":true,"large":false}).appendPoint([32.180326,8.8867812]).appendArc([31.1810643,7.8483609],{"radius":1,"clockwise":false,"large":false}).appendPoint([31.4505881,0.838391]).appendArc([30.6249746,-0.1848371],{"radius":1,"clockwise":true,"large":false}).appendPoint([12.7727581,-3.3326645]).appendArc([11.9615985,-4.4911205],{"radius":1,"clockwise":false,"large":false}).appendPoint([12.4825429,-7.4455437]).appendArc([11.6713833,-8.6039997],{"radius":1,"clockwise":true,"large":false}).appendPoint([-8.0247716,-12.0769632]).appendArc([-9.1832276,-11.2658036],{"radius":1,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 2] });
}


function _keycaps_extrude_4_outline_fn(){
    return new CSG.Path2D([[5.3921094,34.2059959],[22.6262451,37.244839]]).appendPoint([19.7610502,53.4941669]).appendPoint([2.5269145,50.4553238]).appendPoint([5.3921094,34.2059959]).close().innerToCAG()
.union(
    new CSG.Path2D([[8.5177766,16.4794564],[25.7519123,19.5182995]]).appendPoint([22.8867174,35.7676274]).appendPoint([5.6525817,32.7287843]).appendPoint([8.5177766,16.4794564]).close().innerToCAG()
).union(
    new CSG.Path2D([[11.6434438,-1.2470832],[28.8775795,1.7917599]]).appendPoint([26.0123846,18.0410878]).appendPoint([8.7782489,15.0022447]).appendPoint([11.6434438,-1.2470832]).close().innerToCAG()
).union(
    new CSG.Path2D([[-10.3101376,8.0824541],[6.9239981,11.1212972]]).appendPoint([4.0588032,27.3706251]).appendPoint([-13.1753325,24.331782]).appendPoint([-10.3101376,8.0824541]).close().innerToCAG()
).union(
    new CSG.Path2D([[-7.1844704,-9.6440855],[10.0496653,-6.6052424]]).appendPoint([7.1844704,9.6440855]).appendPoint([-10.0496653,6.6052424]).appendPoint([-7.1844704,-9.6440855]).close().innerToCAG()
).union(
    new CSG.Path2D([[-13.4358048,25.8089936],[3.7983309,28.8478367]]).appendPoint([0.933136,45.0971646]).appendPoint([-16.3009997,42.0583215]).appendPoint([-13.4358048,25.8089936]).close().innerToCAG()
).union(
    new CSG.Path2D([[96.7541827,-13.1589183],[113.6578847,-17.6882516]]).appendPoint([117.9283989,-1.7504755]).appendPoint([101.0246969,2.7788578]).appendPoint([96.7541827,-13.1589183]).close().innerToCAG()
).union(
    new CSG.Path2D([[51.3911383,57.1367813],[68.8911383,57.1367813]]).appendPoint([68.8911383,73.6367813]).appendPoint([51.3911383,73.6367813]).appendPoint([51.3911383,57.1367813]).close().innerToCAG()
).union(
    new CSG.Path2D([[51.3911383,39.1367813],[68.8911383,39.1367813]]).appendPoint([68.8911383,55.6367813]).appendPoint([51.3911383,55.6367813]).appendPoint([51.3911383,39.1367813]).close().innerToCAG()
).union(
    new CSG.Path2D([[51.3911383,21.1367812],[68.8911383,21.1367812]]).appendPoint([68.8911383,37.6367812]).appendPoint([51.3911383,37.6367812]).appendPoint([51.3911383,21.1367812]).close().innerToCAG()
).union(
    new CSG.Path2D([[91.3911384,42.1367813],[108.8911384,42.1367813]]).appendPoint([108.8911384,58.6367813]).appendPoint([91.3911384,58.6367813]).appendPoint([91.3911384,42.1367813]).close().innerToCAG()
).union(
    new CSG.Path2D([[91.3911384,24.1367813],[108.8911384,24.1367813]]).appendPoint([108.8911384,40.6367813]).appendPoint([91.3911384,40.6367813]).appendPoint([91.3911384,24.1367813]).close().innerToCAG()
).union(
    new CSG.Path2D([[91.3911384,6.1367812],[108.8911384,6.1367812]]).appendPoint([108.8911384,22.6367812]).appendPoint([91.3911384,22.6367812]).appendPoint([91.3911384,6.1367812]).close().innerToCAG()
).union(
    new CSG.Path2D([[71.3911383,47.1367813],[88.8911383,47.1367813]]).appendPoint([88.8911383,63.6367813]).appendPoint([71.3911383,63.6367813]).appendPoint([71.3911383,47.1367813]).close().innerToCAG()
).union(
    new CSG.Path2D([[71.3911383,29.1367812],[88.8911383,29.1367812]]).appendPoint([88.8911383,45.6367812]).appendPoint([71.3911383,45.6367812]).appendPoint([71.3911383,29.1367812]).close().innerToCAG()
).union(
    new CSG.Path2D([[71.3911383,11.1367812],[88.8911383,11.1367812]]).appendPoint([88.8911383,27.6367812]).appendPoint([71.3911383,27.6367812]).appendPoint([71.3911383,11.1367812]).close().innerToCAG()
).union(
    new CSG.Path2D([[31.3911384,47.1367813],[48.8911384,47.1367813]]).appendPoint([48.8911384,63.6367813]).appendPoint([31.3911384,63.6367813]).appendPoint([31.3911384,47.1367813]).close().innerToCAG()
).union(
    new CSG.Path2D([[31.3911384,29.1367812],[48.8911384,29.1367812]]).appendPoint([48.8911384,45.6367812]).appendPoint([31.3911384,45.6367812]).appendPoint([31.3911384,29.1367812]).close().innerToCAG()
).union(
    new CSG.Path2D([[31.3911384,11.1367812],[48.8911384,11.1367812]]).appendPoint([48.8911384,27.6367812]).appendPoint([31.3911384,27.6367812]).appendPoint([31.3911384,11.1367812]).close().innerToCAG()
).union(
    new CSG.Path2D([[119.8378716,-20.1868276],[134.1730324,-30.2244153]]).appendPoint([143.6370436,-16.7084066]).appendPoint([129.3018828,-6.6708189]).appendPoint([119.8378716,-20.1868276]).close().innerToCAG()
).extrude({ offset: [0, 0, 4] });
}




                function _test1_case_fn() {
                    

                // creating part 0 of case _test1
                let _test1__part_0 = board_extrude_2_outline_fn();

                // make sure that rotations are relative
                let _test1__part_0_bounds = _test1__part_0.getBounds();
                let _test1__part_0_x = _test1__part_0_bounds[0].x + (_test1__part_0_bounds[1].x - _test1__part_0_bounds[0].x) / 2
                let _test1__part_0_y = _test1__part_0_bounds[0].y + (_test1__part_0_bounds[1].y - _test1__part_0_bounds[0].y) / 2
                _test1__part_0 = translate([-_test1__part_0_x, -_test1__part_0_y, 0], _test1__part_0);
                _test1__part_0 = rotate([0,0,0], _test1__part_0);
                _test1__part_0 = translate([_test1__part_0_x, _test1__part_0_y, 0], _test1__part_0);

                _test1__part_0 = translate([0,0,0], _test1__part_0);
                let result = _test1__part_0;
                
            
                    return result;
                }
            
            

                function _test2_case_fn() {
                    

                // creating part 0 of case _test2
                let _test2__part_0 = _keycaps_extrude_4_outline_fn();

                // make sure that rotations are relative
                let _test2__part_0_bounds = _test2__part_0.getBounds();
                let _test2__part_0_x = _test2__part_0_bounds[0].x + (_test2__part_0_bounds[1].x - _test2__part_0_bounds[0].x) / 2
                let _test2__part_0_y = _test2__part_0_bounds[0].y + (_test2__part_0_bounds[1].y - _test2__part_0_bounds[0].y) / 2
                _test2__part_0 = translate([-_test2__part_0_x, -_test2__part_0_y, 0], _test2__part_0);
                _test2__part_0 = rotate([0,0,0], _test2__part_0);
                _test2__part_0 = translate([_test2__part_0_x, _test2__part_0_y, 0], _test2__part_0);

                _test2__part_0 = translate([0,0,0], _test2__part_0);
                let result = _test2__part_0;
                
            
                    return result;
                }
            
            

                function test_case_fn() {
                    

                // creating part 0 of case test
                let test__part_0 = _test1_case_fn();

                // make sure that rotations are relative
                let test__part_0_bounds = test__part_0.getBounds();
                let test__part_0_x = test__part_0_bounds[0].x + (test__part_0_bounds[1].x - test__part_0_bounds[0].x) / 2
                let test__part_0_y = test__part_0_bounds[0].y + (test__part_0_bounds[1].y - test__part_0_bounds[0].y) / 2
                test__part_0 = translate([-test__part_0_x, -test__part_0_y, 0], test__part_0);
                test__part_0 = rotate([0,0,0], test__part_0);
                test__part_0 = translate([test__part_0_x, test__part_0_y, 0], test__part_0);

                test__part_0 = translate([0,0,0], test__part_0);
                let result = test__part_0;
                
            

                // creating part 1 of case test
                let test__part_1 = _test2_case_fn();

                // make sure that rotations are relative
                let test__part_1_bounds = test__part_1.getBounds();
                let test__part_1_x = test__part_1_bounds[0].x + (test__part_1_bounds[1].x - test__part_1_bounds[0].x) / 2
                let test__part_1_y = test__part_1_bounds[0].y + (test__part_1_bounds[1].y - test__part_1_bounds[0].y) / 2
                test__part_1 = translate([-test__part_1_x, -test__part_1_y, 0], test__part_1);
                test__part_1 = rotate([0,0,0], test__part_1);
                test__part_1 = translate([test__part_1_x, test__part_1_y, 0], test__part_1);

                test__part_1 = translate([0,0,0], test__part_1);
                result = result.union(test__part_1);
                
            
                    return result;
                }
            
            
        
            function main() {
                return test_case_fn();
            }

        
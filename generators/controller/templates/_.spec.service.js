import {<%= nameFirstUpper %>Service} from './<%= nameDash %>.service';


describe('<%= nameFirstUpper %> service', () => {
  let <%= nameFirstUpper %>;
  beforeEach(() => {
    <%= nameFirstUpper %> = new <%= nameFirstUpper %>Service();
  });

  it('should be defined', () => {
    expect(<%= nameFirstUpper %>).toBeDefined();
  });

});

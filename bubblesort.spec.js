describe('Bubble Sort', function(){
  beforeEach(function(){
  	spyOn(window, 'swap').and.callThrough();
  });

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
    expect(window.swap.calls.count()).toEqual(0);
  });

  it('handles an array of 1 element', function(){
    expect( bubbleSort([1]) ).toEqual( [1] );
    expect(window.swap.calls.count()).toEqual(0);
  });

  it('sorts an array', function(){
    expect( bubbleSort([5, 4, 1, 2, 3]) ).toEqual( [1, 2, 3, 4, 5] );
    expect(window.swap).toHaveBeenCalledTimes(7);
  });

  it('sorts another array', function(){
    expect( bubbleSort(['a', 'c', 'b']) ).toEqual( ['a', 'b', 'c'] );
    expect(window.swap).toHaveBeenCalledTimes(1);
  });

  it('does not sort a sorted array', function(){
    expect( bubbleSort([1, 2, 3, 4, 5]) ).toEqual( [1, 2, 3, 4, 5] );
    expect(window.swap.calls.count()).toEqual(0);
  });
});
var slideIndex = 1;

function PlusDivs(n,imageGroup)
{
    ShowDivs(slideIndex += n,imageGroup);
}
function CurrentDiv(n,imageGroup)
{
    ShowDivs(slideIndex = n,imageGroup);
}

function ShowImage(imageDisplayRefrance,imageIndex)
{

    var imageDisplay = document.getElementsByClassName(imageDisplayRefrance);
    imageDisplay.src = images[imageIndex];
}

function ShowDivs(n,imageGroup)
{
    var x = document.getElementsByClassName(imageGroup);
    if(n > x.length) {slideIndex = 1}
    if(n < 1) {slideIndex = x.length}
    for(var i = 0; i < x.length; i++)
    {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}

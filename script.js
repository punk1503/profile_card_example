let code = false;
function switch_card()
{
    console.log('clicked');
    profile_img = document.getElementsByClassName('card-img')[0];
    if(code)
    {
        profile_img.src = 'https://placekitten.com/400/450';
    }
    else
    {
        profile_img.src = "./carbon.png";
    }
    code = !code;
}
let show_bio = false;
function switch_card()
{
    console.log('clicked');
    let profile_img = document.getElementsByClassName('card-img')[0];
    let code_button = document.getElementsByClassName('button code')[0];
    if(show_bio)
    {
        profile_img.src = 'https://placekitten.com/400/460';
        code_button.innerHTML = 'Code';
    }
    else
    {
        profile_img.src = "./carbon.png";
        code_button.innerHTML = 'Bio';
    }
    show_bio = !show_bio;
}
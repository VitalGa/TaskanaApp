import logoImage from '@public/logo.svg';

function Logo() {
  return (
    <div className='logo'>
      <img src={logoImage} alt='Логотип приложения' width='124' height='40' />
    </div>
  );
}

export default Logo;

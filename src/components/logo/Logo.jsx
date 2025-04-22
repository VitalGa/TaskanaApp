function Logo() {
  const handleClick = (e) => {
    e.preventDefault();
    const baseUrl = import.meta.env.BASE_URL;
    window.history.pushState({}, '', baseUrl);
  };

  return (
    <a href={import.meta.env.BASE_URL} className='logo' onClick={handleClick}>
      <img src='/logo.svg' alt='Логотип приложения' width='124' height='40' />
    </a>
  );
}

export default Logo;

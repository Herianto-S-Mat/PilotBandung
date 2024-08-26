import ReactDOM from 'react-dom';

export const Portal = ({ judul, link }) => {
  if (isOpen===null) return null;
  return ReactDOM.createPortal(
    <PageButton link={link}>
      {judul}
    </PageButton>
    ,
    document.getElementById('banner_button')
  )
};

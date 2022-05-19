import styled from '@emotion/styled';
import mainImg from '@images/mainImg.jpg';

export const Container = styled('div')({
  display: 'block',
  backgroundImage: `url(${mainImg})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  padding: '120px 70px 190px 70px',
});

export const TitleBlock = styled('div')({
  width: '55%',
  margin: 'auto',
  padding: '50px 30px',
  textAlign: 'center',
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  borderRadius: '10px',
});

export const Title = styled('p')({
  fontSize: '40px',
  fontWeight: '600',
  margin: '0px 10px 20px 10px',
});

export const Text = styled('p')({
  fontSize: '20px',
  marginBottom: '40px',
});

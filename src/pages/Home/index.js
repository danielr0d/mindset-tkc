import React from 'react';
import { useHistory } from 'react-router-dom';

// CUSTOM IMPORTS
import { Formik, Form } from 'formik';
import { Container } from './styles';
import { Typography, Input, Button } from '../../components/atoms';
import YoutubeEmbed from '../../utils/YoutubeEmbed';
import { validateTokenAPI } from './apis';

function Home() {
  const history = useHistory();

  const handleSubmit = data => {
    validateTokenAPI(data.token).then(response => console.log(response));
    // history.push('/instrucoes')
  };

  return (
    <Container>
      <div style={{ display: 'row' }}>
        <Typography
          variant="title"
          style={{
            textAlign: 'center',
            textDecoration: 'underline',
            fontWeight: 'bold',
            marginBottom: '24px',
          }}
        >
          Assista ao vídeo
        </Typography>
        <YoutubeEmbed embedId="GqyAyIDXwoc" />
        <Formik
          initialValues={{
            token: '',
          }}
          onSubmit={data => handleSubmit(data)}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignContent: 'center',
            }}
          >
            <Form style={{ display: 'row' }}>
              <Typography
                variant="title"
                style={{
                  marginTop: '24px',
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}
              >
                Insira seu token aqui!{' '}
              </Typography>
              <Input type="token" name="token" />
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignContent: 'center',
                }}
              >
                <Button variant="solid" type="submit">
                  <Typography variant="whiteRegular">Avançar</Typography>
                </Button>
              </div>
            </Form>
          </div>
        </Formik>
      </div>
    </Container>
  );
}

export default Home;

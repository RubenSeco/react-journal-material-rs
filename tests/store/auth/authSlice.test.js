import { authSlice, checkingCredentials, login, logout } from "../../../src/store/auth/authSlice";
import { authenticatedState, demoUser, initialState, notAuthenticatedState } from "../../fixtures/authFixtures";



describe('Pruebas en el authSlice', () => {
  test('Debe regresar el estado inicial y llamarse auth', () => {
    const state = authSlice.reducer(initialState, {});

    expect(authSlice.name).toBe("auth");
    expect(state).toEqual(initialState);

  });

  test('Debe realizar la autenticación', () => {
    const state = authSlice.reducer(initialState, login(demoUser));
    expect(state).toEqual({
      status: 'authenticated', // 'checking', 'not-authenticated', 'authenticated'
      uid: demoUser.uid,
      email: demoUser.email,
      displayName: demoUser.displayName,
      photoURL: demoUser.photoURL,
      errorMessage: null,

    });


  });

  test('Debe realizar el logout sin argumentos', () => {

    // authenticatedState // logout sin argumentos
    const state = authSlice.reducer(authenticatedState, logout());
    expect(state).toEqual({
      status: 'not-authenticated', // 'checking', 'not-authenticated', 'authenticated'
      uid: null,
      email: null,
      displayName: null,
      photoURL: null,
      errorMessage: undefined,
    });


  });

  test('Debe realizar el logout y mostrar un mensaje de error', () => {

    // authenticatedState // logout con argumentos
    const errorMessage = "Credenciales no son correctas";
    const state = authSlice.reducer(authenticatedState, logout({ errorMessage }));
    expect(state).toEqual({
      status: 'not-authenticated', // 'checking', 'not-authenticated', 'authenticated'
      uid: notAuthenticatedState.uid,
      email: notAuthenticatedState.email,
      displayName: notAuthenticatedState.displayName,
      photoURL: notAuthenticatedState.photoURL,
      errorMessage: errorMessage
    });

  });

  test('Debe cambiar el estado a checking', () => {
    const state = authSlice.reducer(authenticatedState, checkingCredentials());

    expect(state.status).toBe("checking");


  });

});
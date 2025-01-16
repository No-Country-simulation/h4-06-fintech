export class AuthError extends Error {
  constructor(message?: string) {
    super(message ?? 'Credenciales invalidas');
  }
}

export class InternalError extends Error {
  constructor(message?: string) {
    super(
      message ??
        'Algo salió mal al procesar tu solicitud. Por favor, intenta de nuevo en unos minutos.',
    );
  }
}

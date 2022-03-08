import { SOCKET_URL } from '../utils/constants';

class SocketClient {
  private static _socket: WebSocket;

  public static set socket(socketConnection: WebSocket) {
    this._socket = socketConnection;
  }

  public static get socket(): WebSocket {
    return this._socket;
  }

  public static connect(url: string = SOCKET_URL) {
    if (!SocketClient.socket) {
      SocketClient.socket = new WebSocket(url);
    }

    return SocketClient.socket;
  }
}

export default SocketClient;

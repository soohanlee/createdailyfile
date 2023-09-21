# Create Daily File Extension for VSCode

## 설명

이 VSCode 확장 프로그램은 매일 자동으로 현재 날짜를 제목으로 한 md 파일을 생성합니다. 또한 "Hello World" 메시지를 표시하는 추가 명령어도 포함하고 있습니다.

## 기능

1. **Create Daily File**: 매일 자동으로 yyyy.mm.dd 형식의 제목으로 txt 파일을 생성합니다.
2. **Hello World**: "Hello World from createDailyFile!" 메시지를 표시합니다.

## 설치 방법

실제 익스텐션을 마켓 플레이스에 올리지 않고 VSIX 파일을 만든 후 직접 올려 사용하는 방식입니다.

1. vsce 패키징 툴이 설치되어 있어야 합니다.
   npm install -g vsce
2. vsce package를 이용해 VSIX 패키지를 생성합니다.
3. 명령어를 통해 나온 파일을 익스텐션에서 ... 표시를 눌러 직접 인스톨 합니다. (vs code 버전이 맞지 않아 문제 발생가능 "vscode": "^1.82.0" 1.82 이상과 호환됩니다.)
4. VSCode에서 프로젝트를 열고, F5 키를 눌러 디버그 모드로 extension을 실행하세요.
5. 새로운 VSCode 창 (Extension Development Host)에서 Ctrl+Shift+P (또는 Mac에서 Cmd+Shift+P)를 눌러 명령 팔레트를 열고, 등록한 명령어를 검색하고 실행하세요.
6. VSCode에서 .vsix 파일을 사용하여 extension을 설치하세요.

## 사용 방법

1. 명령 팔레트를 열고 (`Ctrl+Shift+P` 또는 `Cmd+Shift+P` on Mac), "Create Daily File" 명령어를 입력하여 실행하세요.

## 개발자

[dahan]

## 라이선스

MIT License

# BurnFit Frontend 과제 – React Native 캘린더

## 과제 개요
React Native를 사용해 커스텀 캘린더 구현

---

## 구현 내용

### ✅ Level 1
- React Native 기반 앱 제작
- 하단에 Bottom Tabs Navigator 추가
- 홈 / 캘린더 / 라이브러리 / 마이페이지 탭 생성 및 각 탭과 연결된 스크린 추가

<img width="300" height="600" alt="Simulator Screenshot - iPhone 16 Pro - 2025-09-02 at 17 33 29" src="https://github.com/user-attachments/assets/ce633801-5e78-43ff-bee5-d6730aac4980" />


### ✅ Level 2
- 캘린더 탭에 외부 라이브러리 없이 커스텀 캘린더 컴포넌트 제작
- 기능 1: 현재 월 출력, 오늘 날짜 표시
- 기능 2: 상단 좌우 화살표 버튼 → 전월/익월 출력
- 기능 3: 특정 날짜 선택 시 원 표시 (마지막 선택만 표시)

<img width="300" height="600" alt="Simulator Screenshot - iPhone 16 Pro - 2025-09-02 at 17 34 08" src="https://github.com/user-attachments/assets/d3c16151-eb70-41a5-a7a0-5de5f7b5eed7" />


### ❌ Level 3
- **react-native-reanimated**, **react-native-gesture-handler** 사용
- 제스처 이벤트 발생 시:
  - 월 캘린더 → 주 캘린더 변환
  - 주 캘린더 → 월 캘린더 변환

---

## 사용 라이브러리
- Zustand
- date-fns
- react-native-reanimated
- react-native-gesture-handler

---

### 의존성 설치
```bash
npm install
```

---

## 실행 방법
```bash
# 앱 실행
npm run start

# 안드로이드 에뮬레이터 실행
npm run android

# iOS 시뮬레이터 실행
npm run ios

# 웹 실행
npm run web

```

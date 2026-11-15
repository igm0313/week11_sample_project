Project Structure: 주요 파일 3개의 역할
    CourseList.jsx - 웹페이지의 기본 html과 component들이 세팅되어있고 CourseItem을 불러서 사용함.
    CourseItem.jsx - courses의 내용을 웹페이지에 보여주는 역할을 함.
    App.css - 위 두개의 스타일을 꾸며줌.

Component & Props: CourseList와 CourseItem의 관계 및 Props 전달 방식
CourseList에서 CourseItem이 사용할 함수를 만들어 map으로 각 course를 부르면서 넘겨준다.

State & Event: useState를 이용한 상태 관리 및 삭제 버튼의 동작 원리
previous(가장 최신 상태)를 받아서 해당 id를 제외하는 필터를 사용하여 삭제시킨다.
업데이트는 ...courses를 활용해서 뒤에 새로운 인자 하나를 추가한다. 
체크박스를 클릭하면 해당 id의 complete가 반전되게 만들었다.

Code Analysis: 주요 코드 2개(각 5~15줄)를 선택하여 동작 원리 설명
  function handleToggle(id) {
    // TODO: map과 spread(...)를 사용하여 해당 id의 completed를 반전
    const items = courses.map(course => (course.id == id)? {...course, completed : !course.completed}  : {...course}); 
    
    setCourses(courses => items);
  }
  삼항연산자를 이용해서 특정 id의 complete를 반전한다. map을 사용했으므로 object에 접근하기 위해 {...course, complete}를 사용함으로 complete 값만 변경하며 다른 값들도 가져왔다.

{newStat == 'complete' && courses.filter(course => course.completed).map(course => (
          <CourseItem key={course.id} course={course} onDelete={handleDelete} onToggle={handleToggle} />
    ))}
{newStat == 'before' && courses.filter(course => !course.completed).map(course => (
          <CourseItem key={course.id} course={course} onDelete={handleDelete} onToggle={handleToggle} />
    ))}
{newStat == 'every' && courses.map(course => (
          <CourseItem key={course.id} course={course} onDelete={handleDelete} onToggle={handleToggle} />
    ))}

    newStat이라는 새로운 useState를 만들어서 화면 표시 방법을 바꾸었다. 위 card를 클릭하면 newStat이 바뀌고 해당하는
    newStat 상태에서 보여주는 화면을 filter을 사용해서 다르게 만들었다.

초기 과목 데이터를 자신이 선택한 과목 5개 이상으로 변경
ERC와 Computer Structure, Bio Chemistry로 변경

프로젝트 제목 및 설명 변경
App.jsx에서 제목을 학번과 이름으로 변경

CSS 스타일 3곳 이상 변경
subtitle font-size : 15px -> 20px로 변경 
.topline color : green으로 변경
.stat 과 panel의 background-color : #4568b4로 변경
.list-head의 grid-template-columns: 1fr 205px 60px로 변경   
.stat:hover 추가

Project Information: 프로젝트 소개, 주요 기능 및 원본 Sample Project URL
스케쥴을 관리할 수 있는 todo program. CURD가 주요기능이다.
https://github.com/2026-2-OSS/week11_sample_project

Installation: 설치·실행 방법 및 실행 화면
npm install 후 npm run dev

Customizing: 수정한 데이터, 텍스트, 스타일 및 파일명
위에 기록되어있음.

Source Code Exploration: 주요 파일 3개, Component와 Props 관계, useState 및 Event 분석, 주요 코드 2개 설명
위에 기록되어있음.

Feature Extension: 구현한 기능 2개 이상, 주요 코드 및 동작 결과
update, toggle, 완료 미완료 필터링 기능 구현.

const course = {id :courses.length+1 , name: newName, category:"major", completed: false};
setCourses(courses => [...courses,course]);

const items = courses.map(course => (course.id == id)? {...course, completed : !course.completed}  : {...course});

{newStat == 'complete' && courses.filter(course => course.completed).map(course => (
<CourseItem key={course.id} course={course} onDelete={handleDelete} onToggle={handleToggle} />

Deployment: 실제 접근 가능한 Vercel URL
https://vercel.com/a-34be/week11-sample-project
https://week11-sample-project-rouge.vercel.app/

Weekly Review:
새롭게 배운 내용 3가지
map에서 삼항 연산자를 통해 특정 조건만 바꿀 수 있는 방법을 배웠다.
condition && html을 활용해 상황에 맞는 html을 렌더링 하는 방법을 배웠다.
useState를 통한 새로운 값들을 setState로 바꾸는 방법에 대해 배웠다.

어려웠던 점과 해결 방법
map의 삼항연산자에서 complete만 변경할 시 complete값만 나와서 곤란했다. 방법은 ...course를 사용해 object자체를 받아 complete만 변경하면 됐다.

AI 활용 내용 및 느낀 점
condition && html 이 이해되지 않아서 AI를 사용하여 물어봤다. and의 특성을 이용한 문법이었는데, condition이 true라면 오른쪽 html이 실행되고(읽어야하니까) false라면 읽을필요가 없으니까 오른쪽 html이 실행되지 않는다. 신기했다.

# OSS Week 11 — React Course Manager (Student Starter)

React + Vite 기반 학생 배포용 Sample Project입니다. **조회와 삭제는 완성**, 등록 및 완료 변경은 학생이 직접 구현하도록 `TODO`로 남겨두었습니다.

## 실행 방법

Node.js 20.19+ 또는 22.12+ 권장.

```bash
npm install
npm run dev
```

브라우저에 표시되는 Local URL에 접속하세요. 빌드 테스트: `npm run build`.

## 소스 구조

- `src/App.jsx`: 페이지 전체 레이아웃
- `src/components/CourseList.jsx`: State 및 목록, 삭제 로직, **TODO 1/2**
- `src/components/CourseItem.jsx`: Props로 데이터를 받고 이벤트 콜백 호출
- `src/data/courses.js`: 초기 과목 데이터
- `src/App.css`: 전체 디자인

## 수행 내용

1. 코드를 실행하고 목록 조회·삭제를 확인합니다.
2. 초기 과목 5개 이상, 제목, CSS 3곳 이상 변경합니다.
3. `CourseList.jsx`의 **TODO 1**: 과목 등록 (빈 값 입력 방지, 고유 id 지정, State 업데이트).
4. `CourseList.jsx`의 **TODO 2**: 완료 체크박스 클릭 시 `completed` 상태 변경.
5. 선택: 검색/필터, 이름 수정 기능 추가.
6. GitHub에 Commit/Push 후 Vercel에 배포합니다.
7. README에 프로젝트 소개, 주요 코드 분석 2개, 변경 내용, Weekly Review, GitHub URL, Vercel URL을 정리합니다.

## 확인할 질문

- `CourseList`와 `CourseItem`의 역할은?
- 왜 `courses`를 직접 수정하지 않고 `setCourses()`를 사용할까요?
- `map()`과 `filter()`는 각각 어떤 목적인가요?
- `course`, `onDelete`, `onToggle` Props는 어디에서 전달되나요?
- 브라우저 새로고침 시 데이터가 초기화되는 이유는? (DB/localStorage 없음)

> 교육 목적의 로컬 State 앱입니다. 서버 API 및 데이터베이스는 사용하지 않습니다.

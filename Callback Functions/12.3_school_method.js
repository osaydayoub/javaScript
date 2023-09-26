const school = {
    teachers: [
    {
    id: 1,
    name: "Pinchas",
    subjects: ["chemistry", "biology", "physics"],
    students: [],
    capacityLeft: 3,
    },
    {
    id: 2,
    name: "Williams",
    subjects: ["history", "ethics"],
    students: [],
    capacityLeft: 2,
    },
    ],
    students: [
    {
    id: 10,
    name: "Jennifer",
    age: 20,
    },
    {
    id: 11,
    name: "Howard",
    age: 23,
    },
    {
    id: 12,
    name: "Old-Timmy",
    age: 86,
    },
    {
    id:13,
    name: "Houston",
    age: 21,
    },
    ],

    findPerson: function(type,id){
        let person;
        if (type === 'student'){
            person =  this.students.find(s => {
                return s.id === id;
            })
        }
        if (type === 'teacher'){
            person = this.teachers.find(t => {
                return t.id === id
            })   
        }
            return person;
    },

    };

    school.assignStudent=function(studentId,subject){
        let student=this.findPerson('student',studentId);
        let teacher=this.teachers.find(t=>{
            return t.subjects.includes(subject)&&t.capacityLeft;
        })
        if(teacher){
            teacher.capacityLeft--;
            teacher.students.push(student);

        }else{
            console.log('“Sorry, no available teachers left');
        }
    }
    school.assignTeachersSubject= function(teacherId,subject){
        let teacher1=this.findPerson('teacher',teacherId);
        if(teacher1.subjects.includes(subject)===false){
            teacher1.subjects.push(subject);
        }
    }
    school.getTeacherCapacityLeft= function(teacherId){
        let teacher1=this.findPerson('teacher',teacherId);
        if(teacher1){
            teacher1.capacityLeft;
        }
    }

    // let p =school.findPerson('student',12);
    // p

    //console.log(school);
    //console.log(school.findPerson('teacher',1))
    //school.assignStudent(10,'chemistry');
    //console.log(school.findPerson('teacher',1))
    //console.log(school);

    // console.log(school.findPerson('teacher',1))
    // school.assignTeachersSubject(1,'chemistry2');
    // console.log(school.findPerson('teacher',1))
    





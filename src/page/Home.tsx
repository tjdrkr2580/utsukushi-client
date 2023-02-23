import Navbar from "@components/Navbar";
import Button from "@element/Button";
import { useRef, useState } from "react";
import { modalState } from "@utils/recoil/atoms";
import { flexCenter, SectionDefaultMaginPadding } from "@utils/styles/Minxin";
import { modalVariants } from "@utils/styles/varients";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { useMutation, useQuery } from "react-query";
import { signInPost, signUpPost } from "@utils/axios/axios";

const HomeWrapper = styled.main`
  ${SectionDefaultMaginPadding}
`;

const Modal = styled(motion.section)`
  z-index: 999;
  width: 100vw;
  height: 100vh;
  position: absolute;
  ${flexCenter}
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
`;

const ErrorMessage = styled.p`
  width: 12rem;
  display: flex;
  align-items: flex-start;
  font-size: 1.15rem;
  margin-right: 10rem;
  padding-left: 0 !important;
  margin: 0 6rem 0 0 !important;
  font-weight: 500;
  color: #ed4337;
`;

const ModalForm = styled.form`
  width: 35rem;
  height: 45rem;
  justify-content: center;
  background-color: ${(props) => props.theme.bgColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.9rem;
  border-radius: 1rem;
  p {
    padding-left: 3rem;
    font-size: 1.1rem;
    margin-bottom: 1rem;
    span {
      cursor: pointer;
      font-size: 1.1rem;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  input {
    width: 20rem;
    background-color: transparent;
    height: 4.5rem;
    color: ${(props) => props.theme.textColor1};
    letter-spacing: 0.08rem;
    font-size: 1.35rem;
    padding: 0.4rem 0.8rem;
    border: 0.1rem solid #797777;
    border-radius: 0.8rem;
    &:focus {
      outline: none;
    }
  }
`;

const Home = () => {
  const [pwdConfirm, setPwdConfirm] = useState("");
  const [visible, setVisible] = useRecoilState(modalState);
  const onChangeConfirm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPwdConfirm(e.target.value);
  };
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const outSection = useRef<HTMLDivElement>(null);
  const [sign, setSign] = useState(true);
  const onSignChange = () => {
    setSign(!sign);
    reset();
  };
  const onSubmit = async (dto: any) => {
    if (sign !== true) {
      const res = await onSignin.mutateAsync(dto);
      console.log(res);
    } else {
      if (dto.password === pwdConfirm) {
        const res = await onSignup.mutateAsync(dto);
        console.log(res);
      }
    }
  };
  const onSignin = useMutation(signInPost);
  const onSignup = useMutation(signUpPost);
  return (
    <HomeWrapper>
      <Navbar />
      {visible === true && (
        <Modal
          ref={outSection}
          onSubmit={handleSubmit(onSubmit)}
          variants={modalVariants}
          initial="start"
          animate="animate"
          exit="exit"
          onClick={(e) => {
            if (outSection.current === e.target) {
              setVisible(false);
            }
          }}
        >
          <ModalForm>
            {sign === true ? (
              <>
                <input
                  placeholder="아이디"
                  {...register("id", {
                    required: {
                      value: true,
                      message: "id",
                    },
                    minLength: {
                      value: 6,
                      message: "6",
                    },
                  })}
                />
                {errors.id?.message === "id" && (
                  <ErrorMessage>아이디를 입력해주세요.</ErrorMessage>
                )}
                {errors.id?.message === "6" && (
                  <ErrorMessage>6자 이상 입력해주세요.</ErrorMessage>
                )}
                <input
                  type="password"
                  placeholder="비밀번호"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "pwd",
                    },
                    minLength: {
                      value: 6,
                      message: "6",
                    },
                  })}
                />
                {errors.password?.message === "pwd" && (
                  <ErrorMessage>비밀번호를 입력해주세요.</ErrorMessage>
                )}
                {errors.password?.message === "6" && (
                  <ErrorMessage>6자 이상 입력해주세요.</ErrorMessage>
                )}
                <p>
                  계정이 존재하지 않으신가요?{" "}
                  <span onClick={onSignChange}>회원가입</span>
                </p>
                <Button wh="l">로그인</Button>
              </>
            ) : (
              <>
                <input
                  placeholder="아이디"
                  {...register("id", {
                    required: {
                      value: true,
                      message: "id",
                    },
                    minLength: {
                      value: 6,
                      message: "6",
                    },
                  })}
                />
                {errors.id?.message === "id" && (
                  <ErrorMessage>아이디를 입력해주세요.</ErrorMessage>
                )}
                {errors.id?.message === "6" && (
                  <ErrorMessage>6자 이상 입력해주세요.</ErrorMessage>
                )}
                <input
                  type="password"
                  placeholder="비밀번호"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "pwd",
                    },
                    minLength: {
                      value: 6,
                      message: "6",
                    },
                  })}
                />
                {errors.password?.message === "pwd" && (
                  <ErrorMessage>비밀번호를 입력해주세요.</ErrorMessage>
                )}
                {errors.password?.message === "6" && (
                  <ErrorMessage>6자 이상 입력해주세요.</ErrorMessage>
                )}
                <input
                  type="password"
                  placeholder="비밀번호 확인"
                  value={pwdConfirm}
                  onChange={onChangeConfirm}
                />

                <p>
                  이미 계정이 존재하신가요?{" "}
                  <span onClick={onSignChange}>로그인</span>
                </p>
                <Button wh="l">회원가입</Button>
              </>
            )}
          </ModalForm>
        </Modal>
      )}
    </HomeWrapper>
  );
};

export default Home;

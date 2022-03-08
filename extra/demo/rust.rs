use std::arch::asm;

let check_equal Vec<Vec<U8>>

let x: u64;
unsafe {
    asm!("mov {}, 5", out(reg) x);
}
assert_eq!(x, 5);

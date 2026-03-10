// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import BulbOutlinedSvg from '@colelab/icons-svg/es/asn/BulbOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'BulbOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: BulbOutlinedSvg }, slots);
  },
});
